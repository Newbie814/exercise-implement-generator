const exerciseEquipmentSelection = document.getElementById(
  'equipment-selection'
);

let exerciseEquipment = [
  'Barbell',
  'Barbell',
  'Barbell',
  'Barbell',
  'Kettlebell',
  'Kettlebell',
  'Dumbbell',
  'Dumbbell',
  'Dumbbell',
  'Band',
  'Cable',
  'Cable',
  'Cable',
];

let randomEquipment =
  exerciseEquipment[Math.floor(Math.random() * exerciseEquipment.length)];
console.log(randomEquipment);

exerciseEquipmentSelection.innerHTML = randomEquipment;
