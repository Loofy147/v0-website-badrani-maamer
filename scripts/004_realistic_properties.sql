-- Update with realistic properties for Promotion Badrani Maamar
-- Based on their actual projects in Rouina, Ain Defla

-- Clear existing sample data
DELETE FROM public.properties;
DELETE FROM public.financing_options;

-- Insert actual financing options based on Algerian market
INSERT INTO public.financing_options (name_fr, name_ar, description_fr, description_ar, down_payment_percentage, interest_rate, duration_months, is_islamic, bank_partner, active) VALUES
('Location-Vente Classique', 'البيع بالإيجار الكلاسيكي', 'Financement bancaire standard avec un apport initial de 20% et remboursement sur 15-20 ans', 'تمويل مصرفي قياسي بدفعة أولية 20٪ وسداد على مدى 15-20 سنة', 20.00, 5.50, 240, FALSE, 'BNA / CPA', TRUE),
('Mourabaha Islamique', 'مرابحة إسلامية', 'Financement conforme à la Charia sans intérêts avec marge bénéficiaire fixe', 'تمويل متوافق مع الشريعة الإسلامية بدون فوائد مع هامش ربح ثابت', 15.00, 0.00, 300, TRUE, 'Al Baraka Bank / Al Salam Bank', TRUE),
('Paiement Direct sur 40 Mois', 'دفع مباشر على 40 شهرا', 'Option de paiement étalé directement auprès du promoteur sans banque', 'خيار دفع مقسط مباشرة مع المطور بدون بنك', 25.00, 0.00, 40, FALSE, 'Promotion Badrani Maamar', TRUE),
('Programme AADL', 'برنامج عدل', 'Programme de logement social avec faible acompte (10%) et taux préférentiel', 'برنامج السكن الاجتماعي بدفعة أولية منخفضة (10٪) وسعر تفضيلي', 10.00, 3.00, 480, FALSE, 'AADL / CNL', TRUE);

-- Insert actual properties from Rouina project (21 units)
-- F3 Apartments
INSERT INTO public.properties (
  title_fr, title_ar, description_fr, description_ar, 
  property_type, status, price, surface_area, bedrooms, bathrooms, 
  floor_number, building_name, address, images, amenities, featured
) VALUES
(
  'Appartement F3 - Résidence Al Rouina',
  'شقة ف3 - إقامة الروينة',
  'Appartement F3 de 85m² dans notre projet de 21 logements promotionnels à Rouina. Finitions modernes, cuisine équipée, grande terrasse. Situé dans un quartier résidentiel calme avec toutes les commodités à proximité. Possibilité de financement bancaire ou paiement échelonné sur 40 mois.',
  'شقة ف3 بمساحة 85 متر مربع في مشروعنا المكون من 21 وحدة سكنية ترقوية في الروينة. تشطيبات عصرية، مطبخ مجهز، شرفة كبيرة. يقع في حي سكني هادئ مع جميع المرافق القريبة. إمكانية التمويل المصرفي أو الدفع المقسط على 40 شهرا.',
  'apartment',
  'available',
  7200000.00,
  85.00,
  3,
  1,
  1,
  'Résidence Al Rouina - Bâtiment A',
  'Commune de Rouina, Wilaya de Aïn Defla',
  '["https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80", "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"]',
  '["parking", "elevator", "balcony", "security", "natural_gas", "water_supply"]',
  TRUE
),
(
  'Appartement F3 - Étage 2',
  'شقة ف3 - الطابق 2',
  'Bel appartement F3 de 82m² au 2ème étage avec vue dégagée. Comprend 3 chambres spacieuses, salon lumineux, cuisine semi-équipée et balcon. Construction de qualité avec isolation thermique et phonique. À 5 minutes du centre-ville de Rouina.',
  'شقة جميلة ف3 بمساحة 82 متر مربع في الطابق الثاني مع إطلالة مفتوحة. تشمل 3 غرف نوم واسعة، صالون مضيء، مطبخ شبه مجهز وشرفة. بناء عالي الجودة مع عزل حراري وصوتي. على بعد 5 دقائق من وسط مدينة الروينة.',
  'apartment',
  'available',
  7000000.00,
  82.00,
  3,
  1,
  2,
  'Résidence Al Rouina - Bâtiment A',
  'Commune de Rouina, Wilaya de Aïn Defla',
  '["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"]',
  '["parking", "elevator", "balcony", "security", "natural_gas"]',
  TRUE
),
(
  'Appartement F3 - Vue Panoramique',
  'شقة ف3 - إطلالة بانورامية',
  'Magnifique F3 de 87m² aux étages supérieurs avec vue panoramique sur les montagnes. Finitions premium, carrelage de qualité, menuiserie en aluminium. Idéal pour famille. Livraison prévue sous 6 mois. Bureau de vente ouvert sur site.',
  'شقة رائعة ف3 بمساحة 87 متر مربع في الطوابق العليا مع إطلالة بانورامية على الجبال. تشطيبات ممتازة، بلاط عالي الجودة، نجارة ألومنيوم. مثالية للعائلات. التسليم المتوقع خلال 6 أشهر. مكتب المبيعات مفتوح في الموقع.',
  'apartment',
  'available',
  7500000.00,
  87.00,
  3,
  1,
  4,
  'Résidence Al Rouina - Bâtiment B',
  'Commune de Rouina, Wilaya de Aïn Defla',
  '["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&q=80"]',
  '["parking", "elevator", "balcony", "security", "storage_room"]',
  TRUE
);

-- F4 Apartments
INSERT INTO public.properties (
  title_fr, title_ar, description_fr, description_ar, 
  property_type, status, price, surface_area, bedrooms, bathrooms, 
  floor_number, building_name, address, images, amenities, featured
) VALUES
(
  'Appartement F4 - Grand Standing',
  'شقة ف4 - فاخرة',
  'Spacieux F4 de 110m² avec 4 chambres dont une suite parentale. Double exposition, très lumineux. Cuisine américaine moderne, 2 salles de bains, double balcon. Parking privatif inclus. Proche écoles et commerces.',
  'شقة ف4 واسعة بمساحة 110 متر مربع مع 4 غرف نوم بما في ذلك جناح رئيسي. واجهة مزدوجة، مضيئة جدا. مطبخ أمريكي عصري، حمامان، شرفتان. موقف سيارات خاص مدرج. قريب من المدارس والمحلات التجارية.',
  'apartment',
  'available',
  9500000.00,
  110.00,
  4,
  2,
  3,
  'Résidence Al Rouina - Bâtiment B',
  'Commune de Rouina, Wilaya de Aïn Defla',
  '["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80"]',
  '["parking", "elevator", "balcony", "security", "storage_room", "natural_gas"]',
  TRUE
),
(
  'Appartement F4 - Rez-de-Jardin',
  'شقة ف4 - الطابق الأرضي مع حديقة',
  'Exceptionnel F4 de 105m² en rez-de-jardin avec jardin privatif de 50m². Parfait pour familles avec enfants. 4 chambres, salon spacieux, cuisine équipée. Accès direct au jardin depuis le salon. Sécurité 24h/24.',
  'شقة استثنائية ف4 بمساحة 105 متر مربع في الطابق الأرضي مع حديقة خاصة 50 متر مربع. مثالية للعائلات مع الأطفال. 4 غرف نوم، صالون واسع، مطبخ مجهز. دخول مباشر للحديقة من الصالون. أمن على مدار الساعة.',
  'apartment',
  'available',
  10000000.00,
  105.00,
  4,
  2,
  0,
  'Résidence Al Rouina - Bâtiment C',
  'Commune de Rouina, Wilaya de Aïn Defla',
  '["https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"]',
  '["parking", "garden", "security", "storage_room", "natural_gas", "private_entrance"]',
  TRUE
);

-- Commercial spaces on National Road 4
INSERT INTO public.properties (
  title_fr, title_ar, description_fr, description_ar, 
  property_type, status, price, surface_area, bedrooms, bathrooms, 
  floor_number, building_name, address, images, amenities, featured
) VALUES
(
  'Local Commercial - Route Nationale N°4',
  'محل تجاري - الطريق الوطني رقم 4',
  'Local commercial stratégique de 80m² sur la Route Nationale 4, axe très fréquenté. Vitrine de 8m, hauteur sous plafond 3.5m, point d''eau et électricité triphasée. Idéal commerce, bureau ou showroom. Visibilité maximale, parking disponible.',
  'محل تجاري استراتيجي بمساحة 80 متر مربع على الطريق الوطني رقم 4، محور مروري كثيف. واجهة 8 أمتار، ارتفاع 3.5 متر، نقطة ماء وكهرباء ثلاثية الطور. مثالي للتجارة أو المكاتب أو صالة العرض. رؤية قصوى، موقف سيارات متاح.',
  'commercial',
  'available',
  12000000.00,
  80.00,
  NULL,
  1,
  0,
  'Centre Commercial Route N4',
  'Route Nationale N°4, Aïn Defla',
  '["https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"]',
  '["parking", "security", "air_conditioning", "storage", "wifi", "accessible"]',
  TRUE
),
(
  'Local Commercial Grande Surface - RN4',
  'محل تجاري بمساحة كبيرة - ر.و.4',
  'Grand local commercial de 150m² avec mezzanine sur Route Nationale 4. Double entrée, grande vitrine, bureaux à l''étage. Convient pour superette, pharmacie, restaurant, salle de sport. Emplacement premium avec flux constant de clients.',
  'محل تجاري كبير بمساحة 150 متر مربع مع ميزانين على الطريق الوطني 4. مدخلان، واجهة كبيرة، مكاتب في الطابق العلوي. مناسب لسوبرماركت، صيدلية، مطعم، قاعة رياضية. موقع ممتاز مع تدفق مستمر للعملاء.',
  'commercial',
  'available',
  18000000.00,
  150.00,
  NULL,
  2,
  0,
  'Complexe Commercial RN4',
  'Route Nationale N°4, Aïn Defla',
  '["https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=800&q=80", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"]',
  '["parking", "security", "air_conditioning", "storage", "wifi", "loading_zone"]',
  TRUE
),
(
  'Bureau Commercial - Petit Format',
  'مكتب تجاري - حجم صغير',
  'Local commercial compact de 45m² parfait pour bureau professionnel, agence ou petit commerce. Climatisé, bon état général, vitrine de 4m. Route Nationale 4, accès facile, parking clients. Prix attractif pour entrepreneurs.',
  'محل تجاري مدمج بمساحة 45 متر مربع مثالي لمكتب مهني أو وكالة أو تجارة صغيرة. مكيف، حالة جيدة، واجهة 4 أمتار. الطريق الوطني 4، وصول سهل، موقف عملاء. سعر جذاب لرجال الأعمال.',
  'commercial',
  'available',
  6500000.00,
  45.00,
  NULL,
  1,
  0,
  'Galerie Marchande RN4',
  'Route Nationale N°4, Aïn Defla',
  '["https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=800&q=80"]',
  '["parking", "air_conditioning", "wifi", "security"]',
  FALSE
);

-- Add sample leads and viewings for demonstration
INSERT INTO public.leads (property_id, full_name, email, phone, message, status, lead_type, budget_range, financing_interest, source)
VALUES
(1, 'Ahmed Benali', '[email protected]', '0770621824', 'Je suis intéressé par cet appartement F3. Pouvez-vous me donner plus de détails sur les options de financement?', 'new', 'buyer', '7000000-8000000', TRUE, 'website'),
(4, 'Fatima Khelifi', '[email protected]', '0550032741', 'Appartement F4 très intéressant. Je voudrais planifier une visite ce weekend si possible.', 'contacted', 'buyer', '9000000-10000000', TRUE, 'website'),
(5, 'Karim Mansouri', '[email protected]', '0661234567', 'Intéressé par le local commercial. Quel est le délai de livraison?', 'new', 'investor', '12000000+', FALSE, 'phone');
