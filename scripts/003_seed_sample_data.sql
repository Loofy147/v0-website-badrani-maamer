-- Insert sample financing options
INSERT INTO public.financing_options (name_fr, name_ar, description_fr, description_ar, down_payment_percentage, interest_rate, duration_months, is_islamic, bank_partner, active) VALUES
('Location-Vente Classique', 'البيع بالإيجار الكلاسيكي', 'Financement standard avec paiement initial de 20%', 'تمويل قياسي بدفعة أولية 20٪', 20.00, 5.50, 180, FALSE, 'BNA', TRUE),
('Mourabaha Islamique', 'مرابحة إسلامية', 'Financement conforme à la Charia avec marge bénéficiaire', 'تمويل متوافق مع الشريعة الإسلامية', 15.00, 0.00, 240, TRUE, 'Al Baraka Bank', TRUE),
('Programme AADL', 'برنامج عدل', 'Programme de logement social avec faible acompte', 'برنامج السكن الاجتماعي بدفعة أولية منخفضة', 10.00, 3.00, 300, FALSE, 'Gouvernement', TRUE),
('Financement Flexible', 'تمويل مرن', 'Options de paiement personnalisées pour investisseurs', 'خيارات دفع مخصصة للمستثمرين', 30.00, 4.50, 120, FALSE, 'CPA', TRUE);

-- Insert sample properties
INSERT INTO public.properties (
  title_fr, title_ar, description_fr, description_ar, 
  property_type, status, price, surface_area, bedrooms, bathrooms, 
  floor_number, building_name, address, images, amenities, featured
) VALUES
(
  'Appartement F3 Moderne avec Vue Panoramique',
  'شقة ف3 عصرية مع إطلالة بانورامية',
  'Magnifique appartement F3 de 95m² au 5ème étage avec vue imprenable sur les montagnes. Finitions haut de gamme, cuisine équipée, balcon spacieux. Proche de toutes commodités.',
  'شقة رائعة ف3 بمساحة 95 متر مربع في الطابق الخامس مع إطلالة رائعة على الجبال. تشطيبات فاخرة، مطبخ مجهز، شرفة واسعة. قريب من جميع المرافق.',
  'apartment',
  'available',
  8500000.00,
  95.00,
  3,
  2,
  5,
  'Résidence Les Roses',
  'Cité Bougara, Blida',
  '["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800"]',
  '["parking", "elevator", "balcony", "security", "garden"]',
  TRUE
),
(
  'Local Commercial Stratégique Centre-Ville',
  'محل تجاري استراتيجي في وسط المدينة',
  'Local commercial de 120m² en rez-de-chaussée, idéalement situé dans le centre commercial de Blida. Vitrine large, accès facile, parking disponible.',
  'محل تجاري بمساحة 120 متر مربع في الطابق الأرضي، يقع في موقع مثالي في المركز التجاري للبليدة. واجهة عريضة، وصول سهل، موقف سيارات متاح.',
  'commercial',
  'available',
  15000000.00,
  120.00,
  NULL,
  1,
  0,
  'Centre Commercial Blida',
  'Boulevard Larbi Tebessi, Blida',
  '["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800"]',
  '["wifi", "air_conditioning", "parking", "security", "storage"]',
  TRUE
),
(
  'Villa Duplex R+2 avec Jardin',
  'فيلا دوبلكس ر+2 مع حديقة',
  'Superbe villa duplex R+2 de 250m² sur un terrain de 400m². 5 chambres, salon double, cuisine moderne, garage. Quartier calme et résidentiel.',
  'فيلا دوبلكس رائعة ر+2 بمساحة 250 متر مربع على قطعة أرض 400 متر مربع. 5 غرف نوم، صالون مزدوج، مطبخ عصري، كراج. حي هادئ وسكني.',
  'villa',
  'available',
  25000000.00,
  250.00,
  5,
  3,
  2,
  NULL,
  'Hay El Houria, Blida',
  '["https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"]',
  '["garden", "garage", "terrace", "security", "storage", "heating"]',
  TRUE
),
(
  'Bureau Professionnel Équipé',
  'مكتب مهني مجهز',
  'Bureau moderne de 80m² au 3ème étage, entièrement équipé et climatisé. Idéal pour professions libérales. 3 pièces + réception.',
  'مكتب عصري بمساحة 80 متر مربع في الطابق الثالث، مجهز بالكامل ومكيف. مثالي للمهن الحرة. 3 غرف + استقبال.',
  'office',
  'available',
  6500000.00,
  80.00,
  NULL,
  1,
  3,
  'Immeuble Professionnel',
  'Avenue de la Liberté, Blida',
  '["https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800"]',
  '["elevator", "air_conditioning", "wifi", "security", "parking"]',
  FALSE
);
