-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create profiles table for user management
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  full_name TEXT,
  phone TEXT,
  user_type TEXT CHECK (user_type IN ('buyer', 'investor', 'agent', 'admin')) DEFAULT 'buyer',
  language TEXT CHECK (language IN ('ar', 'fr')) DEFAULT 'fr',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create properties table
CREATE TABLE IF NOT EXISTS public.properties (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title_fr TEXT NOT NULL,
  title_ar TEXT NOT NULL,
  description_fr TEXT NOT NULL,
  description_ar TEXT NOT NULL,
  property_type TEXT CHECK (property_type IN ('apartment', 'commercial', 'villa', 'office')) NOT NULL,
  status TEXT CHECK (status IN ('available', 'reserved', 'sold')) DEFAULT 'available',
  price DECIMAL(12, 2) NOT NULL,
  surface_area DECIMAL(10, 2) NOT NULL,
  bedrooms INTEGER,
  bathrooms INTEGER,
  floor_number INTEGER,
  building_name TEXT,
  address TEXT NOT NULL,
  city TEXT DEFAULT 'Blida',
  wilaya TEXT DEFAULT 'Blida',
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  featured BOOLEAN DEFAULT FALSE,
  images JSONB DEFAULT '[]',
  amenities JSONB DEFAULT '[]',
  video_url TEXT,
  virtual_tour_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create financing_options table
CREATE TABLE IF NOT EXISTS public.financing_options (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_fr TEXT NOT NULL,
  name_ar TEXT NOT NULL,
  description_fr TEXT,
  description_ar TEXT,
  down_payment_percentage DECIMAL(5, 2) NOT NULL,
  interest_rate DECIMAL(5, 2) NOT NULL,
  duration_months INTEGER NOT NULL,
  is_islamic BOOLEAN DEFAULT FALSE,
  bank_partner TEXT,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create leads table
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  property_id UUID REFERENCES public.properties(id) ON DELETE SET NULL,
  lead_type TEXT CHECK (lead_type IN ('viewing', 'financing', 'callback', 'general')) NOT NULL,
  message TEXT,
  preferred_contact TEXT CHECK (preferred_contact IN ('email', 'phone', 'whatsapp')),
  status TEXT CHECK (status IN ('new', 'contacted', 'qualified', 'converted', 'closed')) DEFAULT 'new',
  source TEXT,
  assigned_to UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create viewings table
CREATE TABLE IF NOT EXISTS public.viewings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  lead_id UUID REFERENCES public.leads(id) ON DELETE SET NULL,
  scheduled_date TIMESTAMPTZ NOT NULL,
  status TEXT CHECK (status IN ('scheduled', 'confirmed', 'completed', 'cancelled')) DEFAULT 'scheduled',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, property_id)
);

-- Create documents table
CREATE TABLE IF NOT EXISTS public.documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  lead_id UUID REFERENCES public.leads(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  document_type TEXT CHECK (document_type IN ('contract', 'payment_plan', 'id_card', 'income_proof', 'other')) NOT NULL,
  file_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_size INTEGER,
  uploaded_by UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT CHECK (type IN ('viewing', 'lead', 'document', 'general')) NOT NULL,
  read BOOLEAN DEFAULT FALSE,
  link TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_properties_status ON public.properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_type ON public.properties(property_type);
CREATE INDEX IF NOT EXISTS idx_properties_featured ON public.properties(featured);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_user_id ON public.leads(user_id);
CREATE INDEX IF NOT EXISTS idx_viewings_property_id ON public.viewings(property_id);
CREATE INDEX IF NOT EXISTS idx_viewings_user_id ON public.viewings(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.financing_options ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.viewings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;

-- RLS Policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for properties (public read, admin write)
CREATE POLICY "Anyone can view available properties" ON public.properties
  FOR SELECT USING (status = 'available' OR auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type = 'admin'
  ));

CREATE POLICY "Admins can insert properties" ON public.properties
  FOR INSERT WITH CHECK (auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type = 'admin'
  ));

CREATE POLICY "Admins can update properties" ON public.properties
  FOR UPDATE USING (auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type = 'admin'
  ));

CREATE POLICY "Admins can delete properties" ON public.properties
  FOR DELETE USING (auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type = 'admin'
  ));

-- RLS Policies for financing_options (public read, admin write)
CREATE POLICY "Anyone can view active financing options" ON public.financing_options
  FOR SELECT USING (active = TRUE OR auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type = 'admin'
  ));

CREATE POLICY "Admins can manage financing options" ON public.financing_options
  FOR ALL USING (auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type = 'admin'
  ));

-- RLS Policies for leads
CREATE POLICY "Users can view their own leads" ON public.leads
  FOR SELECT USING (
    user_id = auth.uid() OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE user_type IN ('admin', 'agent'))
  );

CREATE POLICY "Anyone can create leads" ON public.leads
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins and agents can update leads" ON public.leads
  FOR UPDATE USING (auth.uid() IN (
    SELECT id FROM public.profiles WHERE user_type IN ('admin', 'agent')
  ));

-- RLS Policies for viewings
CREATE POLICY "Users can view their own viewings" ON public.viewings
  FOR SELECT USING (
    user_id = auth.uid() OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE user_type IN ('admin', 'agent'))
  );

CREATE POLICY "Authenticated users can create viewings" ON public.viewings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own viewings" ON public.viewings
  FOR UPDATE USING (
    user_id = auth.uid() OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE user_type IN ('admin', 'agent'))
  );

-- RLS Policies for favorites
CREATE POLICY "Users can view their own favorites" ON public.favorites
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can add favorites" ON public.favorites
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can remove favorites" ON public.favorites
  FOR DELETE USING (user_id = auth.uid());

-- RLS Policies for documents
CREATE POLICY "Users can view their own documents" ON public.documents
  FOR SELECT USING (
    user_id = auth.uid() OR 
    auth.uid() IN (SELECT id FROM public.profiles WHERE user_type IN ('admin', 'agent'))
  );

CREATE POLICY "Users can upload documents" ON public.documents
  FOR INSERT WITH CHECK (user_id = auth.uid() OR uploaded_by = auth.uid());

-- RLS Policies for notifications
CREATE POLICY "Users can view their own notifications" ON public.notifications
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can update their own notifications" ON public.notifications
  FOR UPDATE USING (user_id = auth.uid());
