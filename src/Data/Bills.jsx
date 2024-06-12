export const bills = [
  {
    date: "June 20th, 2023",
    time: "10:30AM",
    doctor: "Dr. Sarah Smith",
    department: "Cardiology",
    status: "Visited",
    services: [
      { description: "Consultation", amount: 100 },
      { description: "Lab Tests", amount: 150 }
    ],
    paymentHistory: [
      { date: "June 22nd, 2023", method: "Credit Card", amount: 200, referenceNumber: "12345" }
    ]
  },
  {
    date: "July 5th, 2023",
    time: "02:00PM",
    doctor: "Dr. John Doe",
    department: "Dermatology",
    status: "Visited",
    services: [
      { description: "Consultation", amount: 50 },
      { description: "Skin Biopsy", amount: 100 }
    ],
    paymentHistory: []
  },
  {
    date: "July 10th, 2023",
    time: "11:00AM",
    doctor: "Dr. Emily Davis",
    department: "Pediatrics",
    status: "Cancelled",
    services: [],
    paymentHistory: []
  },
  {
    date: "August 1st, 2023",
    time: "09:30AM",
    doctor: "Dr. Robert Brown",
    department: "Orthopedics",
    status: "Visited",
    services: [
      { description: "Consultation", amount: 100 },
      { description: "X-Ray", amount: 200 }
    ],
    paymentHistory: [
      { date: "August 3rd, 2023", method: "Cash", amount: 300, referenceNumber: "67890" }
    ]
  },
  {
    date: "October 15th, 2023",
    time: "01:00PM",
    doctor: "Dr. Linda White",
    department: "Neurology",
    status: "Visited",
    services: [
      { description: "Consultation", amount: 150 },
      { description: "MRI", amount: 250 }
    ],
    paymentHistory: [
      { date: "October 17th, 2023", method: "Credit Card", amount: 400, referenceNumber: "11223" }
    ]
  },
  {
    date: "December 5th, 2023",
    time: "10:00AM",
    doctor: "Dr. Michael Green",
    department: "Ophthalmology",
    status: "Visited",
    services: [
      { description: "Consultation", amount: 50 },
      { description: "Eye Exam", amount: 150 }
    ],
    paymentHistory: []
  },
  {
    date: "March 20th, 2024",
    time: "03:00PM",
    doctor: "Dr. Rachel Lee",
    department: "Gynecology",
    status: "Visited",
    services: [
      { description: "Consultation", amount: 75 },
      { description: "Ultrasound", amount: 100 }
    ],
    paymentHistory: [
      { date: "March 21st, 2024", method: "Debit Card", amount: 175, referenceNumber: "44556" }
    ]
  },
  {
    date: "May 10th, 2024",
    time: "11:30AM",
    doctor: "Dr. James Wilson",
    department: "Gastroenterology",
    status: "Cancelled",
    services: [],
    paymentHistory: []
  }
];
