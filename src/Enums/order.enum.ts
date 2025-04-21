export enum OrderStatus {
  PENDING = 'pending', // Buyurtma yaratilgan, hali tasdiqlanmagan
  ACCEPTED = 'accepted', // Buyurtma qabul qilingan
  IN_PROGRESS = 'in_progress', // Buyurtma bajarilmoqda
  DELIVERED = 'delivered', // Buyurtma yetkazilgan
  CANCELED = 'canceled', // Buyurtma bekor qilingan
}

export enum PaymentType {
  CASH = 'CASH',
  CLICK = 'CLICK',
}

export enum TimeUnit {
  HOURLY = 'HOURLY',
  DAILY = 'DAILY',
}
