import { Product, Workshop } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Miłość',
    description: 'Otulający jak czuły dotyk. Słodki, lekko pikantny, romantyczny.',
    longDescription: 'Miłość to zapach, który otula jak czuły dotyk i rozpala zmysły. Słodka, lekko pikantna mgiełka łączy w sobie egzotyczny kwiat ylang-ylang oraz romantyczną nutę róży z wyrazistym akcentem czarnego pieprzu. Idealny na chwile bliskości.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&q=80&w=1200', // Rose/Warm tones
    scentProfile: ['Ylang-Ylang', 'Róża', 'Czarny Pieprz', 'Paczula'],
    sizes: ['10ml', '50ml', '100ml']
  },
  {
    id: 'p2',
    name: 'Spokój',
    description: 'Lekki, czysty zapach wprowadzający atmosferę ciszy i odprężenia.',
    longDescription: 'Spokój to lekki, czysty zapach, który wprowadza atmosferę ciszy i odprężenia. Zielona herbata dodaje świeżości, lawenda koi zmysły, a delikatna nuta kokosa dodaje miękkości i ciepła. Twoja osobista chwila wytchnienia.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=1200', // Clean/Linen/Bright
    scentProfile: ['Zielona Herbata', 'Lawenda', 'Kokos', 'Morska Bryza'],
    sizes: ['10ml', '50ml', '100ml']
  },
  {
    id: 'p3',
    name: 'Uziemienie',
    description: 'Głęboki, ciepły zapach pomagający wrócić do równowagi.',
    longDescription: 'Głęboki, ciepły zapach, który pomaga wrócić do równowagi i poczuć stabilność. Drzewne nuty łączą się z ziemistym akcentem, tworząc spokojną, kojącą kompozycję. Poczuj siłę lasu i stabilność ziemi.',
    price: 89,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200', // Deep Forest/Trees
    scentProfile: ['Drzewo Sandałowe', 'Mech', 'Wetyweria', 'Cedr'],
    sizes: ['10ml', '50ml', '100ml']
  }
];

export const WORKSHOPS: Workshop[] = [
  {
    id: 'w1',
    title: 'Stwórz Własny Zapach',
    description: 'Indywidualne lub grupowe warsztaty tworzenia perfum. Odkryj ponad 40 różnych składników zapachowych i skomponuj swoją unikalną mieszankę.',
    duration: '1.5 - 3h',
    location: 'Akademia Tondo, Poznań',
    image: 'https://images.unsplash.com/photo-1595981266686-0cf387d0a608?auto=format&fit=crop&q=80&w=1200' // Essential oils/Workshop bottles
  }
];