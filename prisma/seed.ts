import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Insert roles
  await prisma.roles.createMany({
    data: [
      {
        role_id: 1,
        name: 'admin',
        decripsion: 'Administrator',
        is_active: true,
      },
      { role_id: 2, name: 'user', decripsion: 'Normal User', is_active: true },
    ],
  });

  // Insert permissions
  await prisma.permissions.createMany({
    data: [
      {
        permission_id: 1,
        name: 'Create User',
        endpoint: '/user',
        method: 'POST',
        module: 'User',
      },
      {
        permission_id: 2,
        name: 'Read User',
        endpoint: '/user',
        method: 'GET',
        module: 'User',
      },
      {
        permission_id: 3,
        name: 'Update User',
        endpoint: '/user/:id',
        method: 'PUT',
        module: 'User',
      },
      {
        permission_id: 4,
        name: 'Delete User',
        endpoint: '/user/:id',
        method: 'DELETE',
        module: 'User',
      },
      {
        permission_id: 5,
        name: 'Create Room',
        endpoint: '/room',
        method: 'POST',
        module: 'Room',
      },
      {
        permission_id: 6,
        name: 'Read Room',
        endpoint: '/room',
        method: 'GET',
        module: 'Room',
      },
      {
        permission_id: 7,
        name: 'Update Room',
        endpoint: '/room/:id',
        method: 'PUT',
        module: 'Room',
      },
      {
        permission_id: 8,
        name: 'Delete Room',
        endpoint: '/room/:id',
        method: 'DELETE',
        module: 'Room',
      },
    ],
  });

  // Insert role_permissions
  await prisma.role_permissions.createMany({
    data: [
      { role_id: 1, permission_id: 1, is_active: true },
      { role_id: 1, permission_id: 2, is_active: true },
      { role_id: 1, permission_id: 3, is_active: true },
      { role_id: 1, permission_id: 4, is_active: true },
      { role_id: 1, permission_id: 5, is_active: true },
      { role_id: 1, permission_id: 6, is_active: true },
      { role_id: 1, permission_id: 7, is_active: true },
      { role_id: 1, permission_id: 8, is_active: true },
      { role_id: 2, permission_id: 2, is_active: true },
      { role_id: 2, permission_id: 6, is_active: true },
    ],
  });

  // Insert locations
  await prisma.locations.createMany({
    data: [
      {
        location_id: 1,
        name_location: 'New York',
        province: 'New York',
        nation: 1,
        image_location:
          'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F1.png&w=384&q=75',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 2,
        name_location: 'London',
        province: 'London',
        nation: 44,
        image_location:
          'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F2.png&w=384&q=75',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 3,
        name_location: 'Barcelona',
        province: 'Barcelona',
        nation: 34,
        image_location:
          'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F3.png&w=384&q=75',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 4,
        name_location: 'Roma',
        province: 'Roma',
        nation: 39,
        image_location:
          'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F5.png&w=384&q=75',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 5,
        name_location: 'Sydney',
        province: 'New South Wales',
        nation: 61,
        image_location:
          'https://gotrip-appdir.vercel.app/_next/image?url=%2Fimg%2Fdestinations%2F1%2F4.png&w=384&q=75',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 6,
        name_location: 'Đà Lạt',
        province: 'Lâm Đồng',
        nation: 84,
        image_location:
          'https://nld.mediacdn.vn/291774122806476800/2024/12/8/anh-11-nguyen-tat-thang-3-17336232087871905002186.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 7,
        name_location: 'Hồ Chí Minh',
        province: 'Hồ Chí Minh',
        nation: 84,
        image_location:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WbY0hP9klr6R3n6DxvIISw2veARaEto-5g&s',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 8,
        name_location: 'Thủ Đô Hà Nội',
        province: 'Hà Nội',
        nation: 84,
        image_location:
          'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/04/anh-ha-noi.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 9,
        name_location: 'Đà Nẵng',
        province: 'Đà Nẵng',
        nation: 84,
        image_location:
          'https://vietnamdailytour.vn/wp-content/uploads/2022/08/cau-rong-da-nang.jpg',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 10,
        name_location: 'Lý Sơn',
        province: 'Quảng Ngãi',
        nation: 84,
        image_location:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghoDEU6xgQlnhfJZ7AR3F7yYu-AOnLBP8Zg&s',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        location_id: 11,
        name_location: 'TP.Nha Trang',
        province: 'Nha Trang',
        nation: 84,
        image_location:
          'https://q-xx.bstatic.com/xdata/images/city/170x136/688907.jpg?k=8a219233969467d9f7ff828918cce2a53b4db6f1da1039d27222441ffb97c409&o=',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  });

  // Insert users
  await prisma.users.createMany({
    data: [
      {
        user_id: 7,
        full_name: 'nguyen van a',
        email: 'vana@gmail.com',
        pass_word:
          '$2b$10$uQWvw89KCuyQHzoq3CYviO97ggPynmu2JrwcpLOlhTkKo5PudhmiO',
        phone: '0987654321',
        birth_day: '01-01-01',
        gender: 'male',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 1,
      },
      {
        user_id: 8,
        full_name: 'nguyen van b',
        email: 'vanb@gmail.com',
        pass_word:
          '$2b$10$CRamgrrcnkd4IR/fTb4eguAbHxQS7WRE9R2k3rtCMYrycEJU7hkLq',
        phone: '0987654321',
        birth_day: '00-00-2000',
        gender: 'female',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 2,
      },
      {
        user_id: 9,
        full_name: 'nguyen van c',
        email: 'vanc@gmail.com',
        pass_word:
          '$2b$10$ig2y/XMPsHjiRbHoRpgfMOQaUhnfmu4KEFM12GsxHmIlIzao5lZ36',
        phone: '0987654321',
        birth_day: '00-00-2000',
        gender: 'male',
        created_at: new Date(),
        updated_at: new Date(),
        role_id: 2,
      },
    ],
  });

  // Insert rooms
  await prisma.rooms.createMany({
    data: [
      {
        room_id: 1,
        room_name: 'Santori Hotel Da Nang Bay',
        living_room: 1,
        bedroom: 2,
        bed: 2,
        bathroom: 1,
        description:
          'Santori Hotel Da Nang Bay in Da Nang offers a private beach area and direct beachfront access.',
        price: 65000,
        washing_machine: true,
        iron: true,
        television: true,
        air_conditioner: true,
        wifi: true,
        kitchen: true,
        parking: true,
        pool: true,
        image:
          'https://cf.bstatic.com/xdata/images/hotel/max1024x768/222463008.jpg?k=7ed07544673e44438d4567e557348ab0e2125c244374b8b60f42fe8aece05c23&o=&hp=1',
        created_at: new Date(),
        updated_at: new Date(),
        location_id: 9,
        address: '769 Nguyen Tat Thanh',
      },
      {
        room_id: 2,
        room_name: 'Da Nang ELC Hotel',
        living_room: 1,
        bedroom: 1,
        bed: 1,
        bathroom: 1,
        description:
          'Da Nang ELC Hotel in Da Nang offers direct beachfront access with stunning sea views.',
        price: 595000,
        washing_machine: false,
        iron: true,
        television: false,
        air_conditioner: true,
        wifi: true,
        kitchen: true,
        parking: true,
        pool: false,
        image:
          'https://cf.bstatic.com/xdata/images/hotel/max1024x768/650656352.jpg?k=d9ade5944eb0f14a33c951da6460a7d4b3d5e590602c02df382f518d42e5a8ca&o=',
        created_at: new Date(),
        updated_at: new Date(),
        location_id: 9,
        address: '426 Võ Nguyên Giáp',
      },
    ],
  });

  // Insert comments
  await prisma.comments.createMany({
    data: [
      {
        comment_id: 1,
        room_id: 1,
        user_id: 7,
        content: 'Great place to stay!',
        star_comment: 5,
      },
      {
        comment_id: 2,
        room_id: 2,
        user_id: 7,
        content: 'Nice and clean',
        star_comment: 4,
      },
    ],
  });

  // Insert bookings
  await prisma.bookings.createMany({
    data: [
      {
        booking_id: 1,
        room_id: 1,
        user_id: 7,
        arrival_date: new Date('2024-05-01'),
        departure_date: new Date('2024-05-05'),
        number_guests: 2,
      },
      {
        booking_id: 2,
        room_id: 2,
        user_id: 7,
        arrival_date: new Date('2024-05-10'),
        departure_date: new Date('2024-05-15'),
        number_guests: 1,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
