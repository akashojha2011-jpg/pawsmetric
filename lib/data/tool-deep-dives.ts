export interface ToolDeepDive {
  overview: string;
  keyFactors: {
    title: string;
    description: string;
  }[];
  clinicalTips: string[];
  whenToConsultVet: string[];
}

export const TOOL_DEEP_DIVES: Record<string, ToolDeepDive> = {
  // AGE CALCULATORS
  'dog-age-calculator': {
    overview:
      'Canine chronological age is fundamentally non-linear compared to human aging. Groundbreaking epigenetics research by the UCSD School of Medicine demonstrates that domestic dogs undergo massive methylation shifts in early life: a 1-year-old canine is biologically equivalent to a 15-year-old human adolescent, reaching young adulthood by year two (~24 human years). Thereafter, cellular turnover and telomere degradation proceed at size-specific rates.',
    keyFactors: [
      {
        title: 'Body Mass & Metabolic Scaling',
        description:
          'Unlike almost every other mammal species where larger animals live longer (e.g., elephants vs. mice), giant dog breeds experience accelerated cellular senescence due to intense early growth velocities and elevated IGF-1 (insulin-like growth factor-1) levels.',
      },
      {
        title: 'DNA Methylation & Epigenetic Clocks',
        description:
          'Modern veterinary gerontology measures conserved epigenetic aging clocks across the canine genome, proving that chronological age alone cannot determine physiological vulnerability.',
      },
      {
        title: 'Breed Predispositions & Healthspan',
        description:
          'Toy breeds frequently maintain stable cardiac and renal function well past age 12, whereas giant and molosser breeds enter senior metabolic stages as early as 5 to 6 years of age.',
      },
    ],
    clinicalTips: [
      'Transition to bi-annual wellness exams once your dog enters the senior quadrant of their projected lifespan.',
      'Maintain an ideal Body Condition Score (BCS 4-5/9); lean dogs live an average of 1.8 years longer than overweight counterparts.',
      'Regular dental scaling preserves organ health by preventing chronic periodontal bacterial showers into the bloodstream.',
    ],
    whenToConsultVet: [
      'Sudden cognitive disorientation, pacing, or loss of house-training (signs of Canine Cognitive Dysfunction).',
      'Unexplained weight loss despite constant or increased appetite.',
      'Persistent stiffness, hesitation on stairs, or reluctance to rise in the morning.',
    ],
  },

  'dog-calorie-calculator': {
    overview:
      'Determining canine daily caloric needs is essential for preventing obesity—the single most prevalent nutritional disease in domestic dogs affecting over 56% of the pet population. Calculating precise kilocalories requires establishing Resting Energy Requirement (RER) based on metabolic body weight (kg^0.75), and adjusting for neuter status, life stage, ambient temperature, and work output.',
    keyFactors: [
      {
        title: 'Metabolic Body Surface Area',
        description:
          'Heat loss and basal metabolism scale with surface area rather than direct linear weight. Hence, RER = 70 × (Body Weight in kg)^0.75 is the clinical standard recognized by AAHA and WSAVA.',
      },
      {
        title: 'Gonadectomy & Hormonal Shift',
        description:
          'Spaying or neutering reduces basal metabolic rate by approximately 20-30% due to hormonal loss, requiring an immediate calorie reduction to prevent rapid post-operative fat deposition.',
      },
      {
        title: 'Dietary Calorie Density',
        description:
          'Different commercial foods vary from 300 kcal/cup (weight management) to 500+ kcal/cup (performance puppy). Daily portion sizes must be calculated from metabolizable energy (ME) rather than generic bag guidelines.',
      },
    ],
    clinicalTips: [
      'Weigh dry kibble on a digital gram scale instead of using volumetric measuring cups, which can introduce up to 25% error.',
      'Treats and table scraps must not exceed 10% of total daily caloric allowance to avoid nutritional imbalances.',
      'Re-calculate caloric needs every 6 months or whenever body condition scoring shifts away from ideal (BCS 4-5).',
    ],
    whenToConsultVet: [
      'Dog continues to gain weight despite strict adherence to calculated caloric restrictions (rule out hypothyroidism or Cushing’s).',
      'Rapid unintentional weight loss without reduced appetite.',
      'Extreme ravenous hunger accompanied by excessive thirst and urination.',
    ],
  },

  'dog-chocolate-toxicity-calculator': {
    overview:
      'Chocolate toxicity is one of the most common canine emergencies. The hazard stems from methylxanthine alkaloids—specifically theobromine and caffeine. Canines lack the rapid hepatic CYP1A2 metabolic pathway present in humans, giving theobromine an extended elimination half-life of 17.5 hours in dogs. This allows toxic levels to build up, causing cardiac arrhythmias, central nervous system stimulation, and severe gastrointestinal distress.',
    keyFactors: [
      {
        title: 'Methylxanthine Concentration by Chocolate Type',
        description:
          'White chocolate has negligible theobromine (~0.25 mg/g), milk chocolate has moderate levels (~2.3 mg/g), dark chocolate (60-85%) contains 5 to 8 mg/g, and unsweetened baker’s cocoa powder contains up to 28.5 mg/g.',
      },
      {
        title: 'Dose-Dependent Toxicity Thresholds',
        description:
          'Mild clinical signs (vomiting, diarrhea, polydipsia) emerge at 20 mg/kg; cardiotoxicity (tachycardia, arrhythmias) appears at 40-50 mg/kg; severe neurotoxicity and fatal seizures can occur above 60 mg/kg.',
      },
      {
        title: 'Secondary Complications (Pancreatitis)',
        description:
          'Even if the theobromine level is sub-lethal, the massive fat and sugar load in chocolates can trigger life-threatening acute pancreatitis 24 to 72 hours post-ingestion.',
      },
    ],
    clinicalTips: [
      'Retain the chocolate packaging immediately so the veterinary team can calculate exact cacao percentages and total ounces ingested.',
      'Do not attempt to induce vomiting at home unless explicitly instructed by a licensed veterinarian or animal poison control center.',
      'Activated charcoal administration in a hospital setting interrupts the enterohepatic recirculation of theobromine.',
    ],
    whenToConsultVet: [
      'Any ingestion of dark chocolate, baker’s chocolate, cocoa powder, or cocoa mulch.',
      'Symptoms such as rapid panting, extreme restlessness, muscle tremors, or vomiting.',
      'Ingestion in toy breeds, seniors, or dogs with pre-existing heart disease.',
    ],
  },

  'dog-benadryl-dosage-calculator': {
    overview:
      'Benadryl (Diphenhydramine Hydrochloride) is a first-generation H1-receptor antihistamine commonly used in canine medicine to treat acute allergic reactions, insect stings, vaccine pre-treatment, and travel anxiety. While accessible over-the-counter, canine dosing is strictly weight-based (1 mg per pound or 2 to 4 mg per kg) and requires careful screening to avoid fatal combination ingredients like pseudoephedrine and xylitol.',
    keyFactors: [
      {
        title: 'Weight-Based Dosing Protocol',
        description:
          'Unlike human adult dosages that follow static tablet counts, dogs require exact milligram calculations. A 50 lb dog typically receives 50 mg (two standard 25 mg tablets) every 8 to 12 hours.',
      },
      {
        title: 'Lethal Human Additives Screening',
        description:
          'Many human allergy, sinus, and cold products combine diphenhydramine with acetaminophen (Tylenol), pseudoephedrine, or phenylephrine. These secondary decongestants and analgesics cause fatal organ failure and seizures in dogs.',
      },
      {
        title: 'Sedative vs. Antihistaminic Response',
        description:
          'Diphenhydramine crosses the blood-brain barrier, frequently causing mild to moderate lethargy and sedation. Occasionally, dogs may experience paradoxical central nervous system excitation.',
      },
    ],
    clinicalTips: [
      'Verify that Diphenhydramine HCl is the ONLY active ingredient listed on the package before administering.',
      'For toy breeds under 15 lbs, use Children’s liquid dye-free diphenhydramine (alcohol-free, xylitol-free) with an oral dosing syringe for precision.',
      'Allow 30 to 60 minutes for oral tablets to reach therapeutic systemic effect.',
    ],
    whenToConsultVet: [
      'Severe facial swelling, hives, vomiting, or wheezing indicating anaphylaxis (requires emergency epinephrine/dexamethasone).',
      'Accidental overdose exhibiting extreme tremors, dilated pupils, rapid heart rate, or collapse.',
      'Dogs with pre-existing glaucoma, urinary retention, heart disease, or hypertension.',
    ],
  },

  'puppy-weight-predictor': {
    overview:
      'Predicting a puppy’s mature adult weight is vital for planning nutritional regimens, crate sizes, exercise boundaries, and preventative orthopedic care. Puppy growth curves are characterized by an initial steep sigmoidal velocity phase up to 16 to 24 weeks, followed by steady skeletal consolidation and muscle mass deposition.',
    keyFactors: [
      {
        title: 'Size Category Growth Trajectory',
        description:
          'Toy and small breed puppies achieve ~50% of adult weight around 12 weeks and conclude growth at 9 to 10 months. Giant breeds achieve 50% adult weight around 20 weeks and continue skeletal growth through 18 to 24 months.',
      },
      {
        title: 'Orthopedic Risk of Overfeeding',
        description:
          'Accelerating growth velocity through excess caloric intake significantly increases the incidence of developmental orthopedic diseases, such as hip dysplasia and osteochondritis dissecans (OCD) in large breeds.',
      },
      {
        title: 'Parental Weight Calibration',
        description:
          'When both biological parents are known, the mid-parental average adjusted for sex (+10% for males, -10% for females) provides the most reliable genetic benchmark.',
      },
    ],
    clinicalTips: [
      'Feed large breed puppies a dedicated large-breed growth formulation with controlled calcium (0.8–1.2%) and phosphorus levels.',
      'Chart your puppy’s weight weekly on a calibrated vet scale to spot plateauing or excessive rapid gain early.',
      'Avoid high-impact jumping and forced running until growth plates fully close on radiographs (12–18 months).',
    ],
    whenToConsultVet: [
      'Puppy growth completely plateaus for more than 2 consecutive weeks during the rapid growth window.',
      'Persistent limping, bunny-hopping gait, or reluctance to bear weight on limbs.',
      'Ribcage is not palpable under gentle pressure, indicating unhealthy early obesity.',
    ],
  },

  'dog-crate-size-calculator': {
    overview:
      'Crate sizing is both a behavioral and orthopedic consideration. A properly sized crate serves as a canine den providing security, facilitating housebreaking, and enabling safe transport. A crate that is too small restricts natural posture and causes spinal compression, while a crate that is too large encourages puppies to soil one end and sleep at the other.',
    keyFactors: [
      {
        title: 'Anatomical Clearance Guidelines',
        description:
          'The interior crate dimensions must provide 2 to 4 inches of clearance above the dog’s head (or tips of ears) when standing erect, and 2 to 4 inches beyond the nose-to-tail-base length.',
      },
      {
        title: 'Postural Freedom of Movement',
        description:
          'The dog must be capable of standing fully upright without hunching, turning around comfortably in a complete circle, and stretching out on their side in lateral recumbency.',
      },
      {
        title: 'Puppy Growth Dividers',
        description:
          'For growing puppies, purchase a crate sized for their projected adult size equipped with an adjustable divider panel to expand usable space as they mature.',
      },
    ],
    clinicalTips: [
      'Measure your dog from the tip of the nose to the base of the tail—do not include the full tail length.',
      'For erect-eared breeds like German Shepherds or French Bulldogs, measure to the tip of the ears rather than the top of the skull.',
      'Equip wire crates with orthopedic foam pads to support elbows and prevent pressure sores in deep-chested breeds.',
    ],
    whenToConsultVet: [
      'Dog displays intense crate phobia, self-harming behavior, or panting/drooling indicative of severe separation anxiety.',
      'Signs of hygroma or callus formation on elbows from inadequate bedding or restrictive crate dimensions.',
      'Difficulty rising or reluctance to step inside due to joint stiffness or spinal pain.',
    ],
  },

  'dog-xylitol-toxicity-calculator': {
    overview:
      'Xylitol (frequently labeled as birch sugar, wood sugar, or E967) is an artificial sugar alcohol sweetener present in sugar-free gums, peanut butters, baked goods, medications, and dental rinses. While harmless to humans, xylitol stimulates a massive, dose-dependent release of insulin from the canine pancreas, resulting in life-threatening hypoglycemia within 10 to 60 minutes and acute hepatic failure at higher doses.',
    keyFactors: [
      {
        title: 'Hypoglycemic Threshold (0.1 g/kg)',
        description:
          'Ingestion of just 0.1 grams of xylitol per kilogram of body weight can precipitate severe, symptomatic hypoglycemia requiring emergency intravenous dextrose therapy.',
      },
      {
        title: 'Hepatotoxic Threshold (0.5 g/kg)',
        description:
          'At dosages exceeding 0.5 g/kg, xylitol causes direct acute hepatic necrosis, loss of clotting factors, and coagulopathy, carrying a high mortality rate even with intensive care.',
      },
      {
        title: 'Hidden Ingredient Labeling',
        description:
          'Manufacturers often disguise xylitol as "birch sugar," "birch bark extract," or "sugar alcohol." Always inspect human peanut butter jars before filling dog puzzle toys.',
      },
    ],
    clinicalTips: [
      'If ingestion was witnessed within 30 minutes and the dog is alert, contact emergency veterinary services immediately before attempting any intervention.',
      'Never induce vomiting in a dog that is wobbly, lethargic, or disoriented from hypoglycemia, as aspiration pneumonia can result.',
      'Carry honey or maple syrup to rub on oral gums if your dog collapses en route to the veterinary emergency clinic.',
    ],
    whenToConsultVet: [
      'Any known or suspected ingestion of chewing gum, sugar-free candies, or xylitol-containing peanut butter.',
      'Signs of weakness, ataxia (drunken gait), vomiting, tremors, or seizures.',
      'Yellowing of gums or whites of eyes (jaundice) occurring within 24 to 72 hours of ingestion.',
    ],
  },

  'dog-water-intake-calculator': {
    overview:
      'Proper hydration is the cornerstone of canine renal function, electrolyte equilibrium, and cellular homeostasis. A healthy adult dog normally consumes between 50 to 100 mL of fluid per kilogram of body weight each day (approximately 1 ounce per pound). Changes in baseline water consumption are often the earliest clinical indicator of systemic metabolic disorders.',
    keyFactors: [
      {
        title: 'Dietary Moisture Content',
        description:
          'Dogs eating dry kibble (10% moisture) drink significantly more water from the bowl than dogs on canned, fresh, or raw diets (75–80% moisture) that fulfill substantial fluid needs through food.',
      },
      {
        title: 'Thermal & Exercise Exertion',
        description:
          'Because dogs thermoregulate primarily through respiratory panting, hot ambient weather or vigorous activity can double or triple daily fluid loss.',
      },
      {
        title: 'Psychogenic vs. Pathologic Polydipsia',
        description:
          'Consistent consumption exceeding 100 mL/kg/day is clinically classified as polydipsia and warrants comprehensive medical screening.',
      },
    ],
    clinicalTips: [
      'Measure daily bowl refills for 3 days to establish your dog’s true baseline consumption.',
      'Always provide multiple stainless steel or ceramic water bowls and clean them daily to prevent biofilm accumulation.',
      'During summer outings, carry fresh water and offer small, frequent sips rather than allowing sudden gorging.',
    ],
    whenToConsultVet: [
      'Sudden noticeable increase in water consumption (rule out diabetes mellitus, Cushing’s, or chronic kidney disease).',
      'Refusal to drink water for over 24 hours accompanied by lethargy or dry gums.',
      'Excessive urination (polyuria) causing sudden indoor accidents in a previously housebroken dog.',
    ],
  },

  'dog-grape-toxicity-calculator': {
    overview:
      'Grape and raisin toxicosis in dogs represents an idiosyncratic nephrotoxic emergency. In 2021, veterinary toxicologists definitively identified tartaric acid and potassium bitartrate as the toxic principles responsible for acute renal tubular necrosis. Unlike dose-proportional toxins, individual canine sensitivity to tartaric acid varies wildly: some dogs suffer fatal acute kidney injury (AKI) from eating just 2 to 3 raisins, whereas others show higher transient tolerance.',
    keyFactors: [
      {
        title: 'Tartaric Acid Concentration Variance',
        description:
          'Raisins, sultanas, and currants have approximately 4.5 times the concentrated dry weight of tartaric acid compared to fresh table grapes, making dried fruit exposures particularly dangerous per gram.',
      },
      {
        title: 'Proximal Renal Tubular Necrosis',
        description:
          'Tartaric acid causes acute cell death in the proximal renal tubules, precipitating rapid azotemia (elevation of BUN and creatinine) followed by oliguria (reduced urine) and fatal anuria (no urine output) within 24 to 72 hours.',
      },
      {
        title: 'Zero-Tolerance Clinical Threshold',
        description:
          'Because sensitivity cannot be predicted by breed, size, or genetics, the American College of Veterinary Emergency and Critical Care (ACVECC) treats ANY known ingestion of grapes or raisins as an immediate medical emergency.',
      },
    ],
    clinicalTips: [
      'Immediately note the exact variety of fruit (fresh vs. raisin vs. baked in fruitcake) and approximate time of ingestion.',
      'Seek veterinary attention within the golden 2-hour window where clinical decontamination via emesis and activated charcoal is most effective.',
      'Anticipate a minimum 48-hour hospitalization with aggressive IV fluid therapy to maintain renal perfusion and flush circulating tartrates.',
    ],
    whenToConsultVet: [
      'ANY ingestion of grapes, raisins, currants, or baked products containing them, regardless of quantity.',
      'Vomiting, lethargy, abdominal pain, or loss of appetite within 6 to 12 hours of suspected exposure.',
      'Decreased urine production or straining to urinate.',
    ],
  },

  'dog-pregnancy-due-date-calculator': {
    overview:
      'The canine gestational period is remarkably consistent across all breeds, lasting an average of 63 days (9 weeks) from ovulation, with a biological range of 58 to 68 days from the first breeding date. Accurately tracking canine pregnancy milestones is critical for timely veterinary ultrasounds, transitional puppy nutrition, radiographic litter counts, and preparation for whelping.',
    keyFactors: [
      {
        title: 'Ovulation vs. Breeding Date Timing',
        description:
          'Canine sperm can survive up to 7 days in the female reproductive tract, while unfertilized ova take 2 days to mature post-ovulation. A single breeding date can differ from the true fertilization date by up to 5 days.',
      },
      {
        title: 'Third-Trimester Caloric Ramp-Up',
        description:
          'Approximately 75% of fetal growth occurs in the final 3 weeks (days 42–63). The dam’s caloric requirement increases by 30% to 50%, necessitating high-density growth/lactation food rather than simply feeding more low-energy maintenance kibble.',
      },
      {
        title: 'Pre-Whelping Temperature Drop',
        description:
          'A sharp drop in the dam’s rectal body temperature below 99°F (37.2°C)—caused by a precipitous decline in systemic progesterone—reliably signals that active stage-1 labor will initiate within 12 to 24 hours.',
      },
    ],
    clinicalTips: [
      'Schedule a transabdominal ultrasound at days 28 to 30 to confirm embryonic heartbeats and gestational sac viability.',
      'Perform abdominal radiographs (X-rays) at day 55+ to obtain an exact puppy skull/spine count, which prevents undetected retained fetuses during whelping.',
      'Take rectal temperatures twice daily beginning at day 56 to catch the distinct 24-hour pre-labor progesterone drop.',
    ],
    whenToConsultVet: [
      'Gestation extends beyond 65 days from ovulation or 70 days from the initial mating date.',
      'Greenish-black vaginal discharge (uteroverdin) appears before the birth of the first puppy, indicating placental detachment.',
      'Strong, active abdominal contractions last more than 30 minutes without delivering a puppy (dystocia).',
    ],
  },

  'dog-dehydration-risk-calculator': {
    overview:
      'Canine dehydration occurs when fluid loss exceeds intake, rapidly compromising blood volume, organ perfusion, and cellular function. Because dogs only sweat through their paw pads and thermoregulate predominantly via respiratory evaporative cooling (panting), environmental heat, vomiting, diarrhea, or systemic fever can induce life-threatening hypovolemic shock with startling speed.',
    keyFactors: [
      {
        title: 'Clinical Dehydration Tiers (5% to 12%+)',
        description:
          'Mild dehydration (5%) presents as dry sticky gums; moderate dehydration (7–8%) causes loss of skin turgor and delayed capillary refill (>2 sec); severe dehydration (10–12%) induces sunken eyes, hypothermia, and impending vascular collapse.',
      },
      {
        title: 'Skin Tent Test & Capillary Refill Time (CRT)',
        description:
          'Lifting the skin over the shoulder blades should snap back immediately in a well-hydrated canine. A persistent tent lasting more than 2 seconds confirms significant interstitial fluid deficit.',
      },
      {
        title: 'Electrolyte & Acid-Base Imbalances',
        description:
          'Dehydration secondary to acute gastroenteritis strips potassium, sodium, and chloride, leading to metabolic acidosis that cannot be resolved with oral tap water alone.',
      },
    ],
    clinicalTips: [
      'Press your finger firmly against your dog’s upper gum and release: the pale blanch should turn healthy pink in under 1.5 seconds.',
      'Do not allow a severely dehydrated dog to rapidly gulp huge amounts of water, as this can trigger acute gastric dilatation or vomiting.',
      'Offer chilled veterinary electrolyte solutions or diluted low-sodium bone broth in small, tablespoon-sized portions every 15 minutes.',
    ],
    whenToConsultVet: [
      'Skin tent fails to snap back, or gums feel tacky, dry, or pale gray.',
      'Concurrent ongoing vomiting or hemorrhagic diarrhea preventing fluid retention.',
      'Extreme lethargy, sunken eyes, weakness, or inability to stand upright.',
    ],
  },

  'raw-diet-calculator': {
    overview:
      'Biologically Appropriate Raw Food (BARF) and Prey Model Raw (PMR) feeding regimens seek to replicate ancestral canine evolutionary nutrition. However, successful raw feeding requires rigorous adherence to precise anatomical ratios—typically 80% muscle meat, 10% edible bone, 5% liver, and 5% other secreting organs—to prevent crippling nutritional imbalances like secondary nutritional hyperparathyroidism.',
    keyFactors: [
      {
        title: 'Calcium-to-Phosphorus Ratio (Ca:P 1.2:1)',
        description:
          'Pure muscle meat is extremely rich in phosphorus and devoid of calcium. Feeding meat without raw meaty bones (RMB) or calcium carbonate results in skeletal demineralization and bone fractures.',
      },
      {
        title: 'Essential Fatty Acids & Micronutrient Gaps',
        description:
          'Standard grocery-store raw meats are consistently deficient in Vitamin E, zinc, iodine (kelp), and Omega-3 fatty acids (EPA/DHA), requiring dedicated targeted whole-food supplementation.',
      },
      {
        title: 'Pathogen Safety & Zoonotic Risks',
        description:
          'Raw poultry and meats carry high loads of Salmonella, Campylobacter, and Listeria. While adult canine gastric acidity (pH 1–2) provides significant defense, strict kitchen hygiene is mandatory to protect human family members.',
      },
    ],
    clinicalTips: [
      'Never feed cooked bones of any kind; cooking alters collagen structure, causing bones to splinter into sharp, perforating shards.',
      'Source a dedicated digital gram scale and prep weekly meal portions in airtight freezer containers.',
      'Rotate between at least three protein sources (e.g., beef, turkey, lamb) over a monthly cycle to ensure balanced amino acid diversity.',
    ],
    whenToConsultVet: [
      'Puppy or pregnant dam being considered for a raw diet (growing puppies have narrow calcium tolerances; consult a Board-Certified DACVN).',
      'Persistent loose stools, vomiting, or weight loss following transition to raw food.',
      'Signs of gastrointestinal obstruction: retching, distended abdomen, or bloody stools after consuming bones.',
    ],
  },

  'dog-weight-loss-calculator': {
    overview:
      'Canine obesity reduces median lifespan by up to 2.5 years and drastically exacerbates osteoarthritis, cranial cruciate ligament (CCL) rupture, diabetes, and tracheal collapse. Designing an effective weight-loss regimen requires calculating Resting Energy Requirement (RER) based on the dog’s TARGET ideal weight rather than current obese mass, creating a calculated 15% to 20% safe caloric deficit.',
    keyFactors: [
      {
        title: 'Safe Weekly Loss Rate (1% to 2%)',
        description:
          'Canine weight loss must never exceed 2% of total body weight per week. Faster weight reduction precipitates rapid muscle wasting, hepatic strain, and severe behavioral hunger rebound.',
      },
      {
        title: 'Satiety & Nutrient Density vs. Simple Starvation',
        description:
          'Simply feeding 50% less of a maintenance kibble causes clinical micronutrient starvation. Dedicated veterinary weight management diets increase crude fiber and protein to preserve lean muscle mass while keeping dogs feeling full.',
      },
      {
        title: 'Treat & Scrap Elimination',
        description:
          'A single piece of human cheddar cheese (100 kcal) fed to a 20 lb dog is biologically equivalent to a human consuming an entire cheeseburger. Treats must be capped at 10% of total daily calculated allowance.',
      },
    ],
    clinicalTips: [
      'Replace high-calorie biscuits with fresh, steamed green beans, raw carrot sticks, or plain canned pureed pumpkin.',
      'Weigh your dog on the exact same clinic or home pet scale every 14 days, always before breakfast.',
      'Use interactive puzzle toys and snuffle mats to slow down meal ingestion and stimulate psychological satisfaction.',
    ],
    whenToConsultVet: [
      'Dog fails to lose any weight despite strict measured adherence to calculated deficit calories for 4 weeks (screen for canine hypothyroidism or hyperadrenocorticism).',
      'Rapid, unintended muscle wasting along the spine and temporal head bones.',
      'Sudden extreme lethargy, weakness, or refusal to eat prescription dietary food.',
    ],
  },

  'dog-food-portion-calculator': {
    overview:
      'Portion control is the primary modifiable determinant of lifetime canine wellness. Generic guidelines printed on commercial kibble bags represent broad population averages that often overestimate energy needs by 20% to 30%, directly driving the domestic canine obesity epidemic. Determining precise cup or gram portions requires establishing individual Maintenance Energy Requirements (MER) based on life stage and daily activity level.',
    keyFactors: [
      {
        title: 'Volumetric Measuring Error',
        description:
          'Standard kitchen measuring cups introduce up to 25% volumetric error due to kibble settling and kibble pellet diameter. Utilizing an inexpensive digital gram scale ensures exact daily caloric consistency.',
      },
      {
        title: 'Metabolizable Energy (ME) Variations',
        description:
          'Commercial dog foods vary widely from 310 kcal/cup up to 540 kcal/cup. Switching brands without recalibrating portion sizes based on kcal/kg results in accidental under- or overfeeding.',
      },
      {
        title: 'Activity & Neuter Status Modifiers',
        description:
          'Neutered adult companion dogs have an energy factor of 1.6 × RER, intact working breeds require 2.0 to 3.0 × RER, and sedentary seniors may require only 1.2 × RER.',
      },
    ],
    clinicalTips: [
      'Locate the "Calorie Content" panel on your food bag to find exact kcal/cup and kcal/kg specifications.',
      'Divide the total calculated daily portion into 2 or 3 distinct feedings rather than offering one large meal, which reduces the risk of Gastric Dilatation-Volvulus (GDV/Bloat) in deep-chested breeds.',
      'Adjust portions downward by 5% to 10% during winter months if outdoor walking and active playtime decrease.',
    ],
    whenToConsultVet: [
      'Dog is constantly begging or eating non-food items (pica) despite receiving calculated caloric portions.',
      'Noticeable ribs or spine visibility (BCS below 4/9) despite eating recommended amounts.',
      'Chronic loose stool or flatulence, which often indicates digestive overload from excessive meal volume.',
    ],
  },

  'dog-cost-calculator': {
    overview:
      'The lifetime financial commitment of canine guardianship ranges from $18,000 to over $45,000 depending on breed size, genetic longevity, and geographic cost of veterinary care. While initial puppy gear and adoption fees are predictable, over 70% of lifetime expenditure occurs as recurring annual veterinary wellness, high-quality nutrition, dental prophylaxis, and senior medical reserves.',
    keyFactors: [
      {
        title: 'Breed Mass & Medication Scaling',
        description:
          'Every prescription medication, flea/tick preventative, anesthesia induction, and surgical procedure is billed directly by canine weight. A 100 lb Mastiff incurs triple the pharmaceutical costs of a 10 lb Maltese.',
      },
      {
        title: 'Senior Care Curve (Ages 8+)',
        description:
          'The final 25% of a dog’s life accounts for roughly 45% of total lifetime medical expenses due to chronic disease management, bloodwork panels, ultrasound imaging, and mobility therapeutics.',
      },
      {
        title: 'Preventative Dental & Health ROI',
        description:
          'Annual professional dental cleanings and daily at-home brushing prevent severe periodontal disease and endocarditis, saving thousands in emergency tooth extractions and renal treatments later in life.',
      },
    ],
    clinicalTips: [
      'Enroll in a comprehensive pet health insurance policy during puppyhood before any pre-existing medical conditions are documented on veterinary records.',
      'Establish a dedicated pet emergency savings fund containing $2,000 to $4,000 for unexpected diagnostic imaging and urgent care visits.',
      'Purchase annual parasite preventatives in 6-month or 12-month bundles to take advantage of manufacturer veterinary clinic rebates.',
    ],
    whenToConsultVet: [
      'Prior to adopting a breed with known high genetic morbidity (e.g., French Bulldogs, Cavalier King Charles Spaniels) to understand anticipated lifetime medical budgets.',
      'When considering altering diets or routine preventative schedules due to financial constraints—vets can recommend safe, budget-friendly generic alternatives.',
      'To discuss proactive senior screening panels before chronic symptoms become advanced and costly to manage.',
    ],
  },
};

export function getToolDeepDive(
  slug: string,
  calc?: {
    title: string;
    categoryName: string;
    category: string;
    description: string;
    methodology?: { summary: string; formulaText: string; sources: string[] };
  }
): ToolDeepDive | null {
  if (TOOL_DEEP_DIVES[slug]) {
    return TOOL_DEEP_DIVES[slug];
  }
  if (!calc) {
    return null;
  }
  return {
    overview: `${calc.title} provides evidence-based mathematical modeling designed to eliminate guesswork in canine care. Domestic dogs exhibit dramatic anatomical and metabolic variance across breeds and life stages, meaning standardized human approximations or generic flat-rate calculations fail to provide clinical precision. Grounded in peer-reviewed veterinary literature, this tool provides quantitative insights calibrated for companion animal health.`,
    keyFactors: [
      {
        title: 'Canine Physiological Scaling',
        description:
          'Biological parameters in dogs do not scale linearly with weight. Factors such as metabolic body surface area, life stage, body condition score (BCS), and genetic predispositions fundamentally alter health metrics.',
      },
      {
        title: 'Evidence-Based Methodological Accuracy',
        description:
          calc.methodology?.summary ||
          'Calculations adhere strictly to validated veterinary formulas published by organizations like the AVMA, WSAVA, and the American Animal Hospital Association (AAHA).',
      },
      {
        title: 'Individual Patient Variance',
        description:
          'While mathematical formulas provide a dependable baseline, individual canine health is influenced by reproductive status (intact vs. neutered), activity tier, chronic subclinical conditions, and food energy density.',
      },
    ],
    clinicalTips: [
      'Document calculation results over time to detect subtle longitudinal trends before physical symptoms emerge.',
      'Always use a digital scale rather than visual estimation when measuring body weight, medications, or dietary rations.',
      'Incorporate calculation findings into your dog’s annual or bi-annual preventative veterinary wellness checkups.',
    ],
    whenToConsultVet: [
      'Significant or unexplained shifts in weight, appetite, water intake, or energy levels over a 7-day period.',
      'Emergence of acute clinical signs including persistent vomiting, diarrhea, respiratory distress, or severe lethargy.',
      'Before introducing substantial alterations to prescription medications, feeding regimens, or physical training protocols.',
    ],
  };
}
