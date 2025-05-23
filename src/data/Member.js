// Data dummy untuk member Sedap Restaurant
const members = [
  {
    member_id: "M001",
    nama: "John Doe",
    email: "john.doe@example.com",
    tipe_member: "silver",
    tanggal_bergabung: "2022-05-15"
  },
  {
    member_id: "M002",
    nama: "Jane Smith",
    email: "jane.smith@example.com",
    tipe_member: "gold",
    tanggal_bergabung: "2021-11-23"
  },
  {
    member_id: "M003",
    nama: "Robert Johnson",
    email: "robert.johnson@example.com",
    tipe_member: "platinum",
    tanggal_bergabung: "2020-08-10"
  },
  {
    member_id: "M004",
    nama: "Emily Davis",
    email: "emily.davis@example.com",
    tipe_member: "silver",
    tanggal_bergabung: "2023-01-05"
  },
  {
    member_id: "M005",
    nama: "Michael Wilson",
    email: "michael.wilson@example.com",
    tipe_member: "gold",
    tanggal_bergabung: "2022-03-17"
  }
];

// Fungsi helper untuk mencari member berdasarkan email
export const findMemberByEmail = (email) => {
  return members.find(member => member.email.toLowerCase() === email.toLowerCase());
};

// Ekspor data members sebagai default
export default members;
