// ----------------- Taks - 1 ----------------------------

const studentData = {
  name: "John Doe",
  age: 21,
  address: {
    street: "123 Main St",
    city: "NA",
    country: "USA",
    postalCode: null,
  },
  courses: [
    {
      name: "Math",
      grade: "A",
      extra: "-",
    },
    {
      name: "Science",
      grade: null,
      extra: "Lab",
    },
  ],
  hobbies: ["Football", "NA", "-"],
};

function recursivefunc(studentData) {
  if (Array.isArray(studentData)) {
    studentData
      .map((item) => {
        recursivefunc(item);
      })
      .filter((item) => item !== null || item !== "NA" || item !== "-");
  } else if (typeof studentData === "object") {
    for (let key in studentData) {
      if (
        studentData[key] === null ||
        studentData[key] === "NA" ||
        studentData[key] === "-"
      ) {
        delete studentData[key];
      } else {
        studentData[key] = recursivefunc(studentData[key]);
      }
    }
    return studentData;
  }
  return studentData;
}

const cleanStudentData = recursivefunc(studentData);
console.log(cleanStudentData);

// ----------------------- Task - 2 ---------------------

const vehicleTypes = [
  { typeCode: "CAR", wheels: 4 },
  { typeCode: "BIKE", wheels: 2 },
  { typeCode: "TRUCK", wheels: 6 },
];

const vehicleModels = [
  { model: "Sedan", typeCode: "CAR" },
  { model: "Mountain Bike", typeCode: "BIKE" },
  { model: "Pickup", typeCode: "TRUCK" },
];

function getVehicleWheels(vehicleModelType) {
  const type = vehicleTypes.find((item) => item.typeCode === vehicleModelType);
  return type ? type.wheels : undefined;
}

function vehicleWheels(vehicleModels) {
  return vehicleModels.map((model) => {
    const wheels = getVehicleWheels(model.typeCode);
    return wheels !== undefined ? { ...model, wheels } : model;
  });
}

const updatedVehicleDetails = vehicleWheels(vehicleModels);
console.log(updatedVehicleDetails);
