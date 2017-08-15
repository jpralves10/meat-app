class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOptions: string,
    public orderItems: OrderItem[] = []
  ){}
}

class OrderItem {
  constructor(
    public menuId: string,
    public quantity: number
  ){}
}

export {Order, OrderItem}
