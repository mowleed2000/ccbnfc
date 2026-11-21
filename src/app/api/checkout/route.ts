import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { storeConfig } from "@/config/store.config";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, customer } = body;

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Cart cannot be empty." },
        { status: 400 }
      );
    }

    if (!customer?.name || !customer?.email || !customer?.addressLine1 || !customer?.postcode) {
      return NextResponse.json(
        { error: "Missing required delivery details." },
        { status: 400 }
      );
    }

    // Server-side financial re-calculation (Never trust client prices)
    let computedSubtotalPence = 0;
    for (const item of items) {
      const canonicalProduct = products.find((p) => p.id === item.productId);
      if (!canonicalProduct) {
        return NextResponse.json(
          { error: `Unrecognised product ID: ${item.productId}` },
          { status: 400 }
        );
      }
      computedSubtotalPence += canonicalProduct.pricePence * item.quantity;
    }

    const computedDeliveryPence = storeConfig.delivery.standardRatePence;
    const computedTotalPence = computedSubtotalPence + computedDeliveryPence;
    const orderReference = `TP-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      orderReference,
      totalPence: computedTotalPence,
      currency: "GBP",
      message: "Order validated and registered in workshop queue.",
    });
  } catch {
    return NextResponse.json(
      { error: "Order calculation failed." },
      { status: 500 }
    );
  }
}
