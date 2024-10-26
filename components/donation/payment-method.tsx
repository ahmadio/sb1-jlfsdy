"use client";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Landmark } from "lucide-react";

interface PaymentMethodProps {
  control: Control<any>;
  value: string;
  setValue: (name: string, value: string) => void;
}

export function PaymentMethod({ control, value, setValue }: PaymentMethodProps) {
  return (
    <FormItem className="space-y-3">
      <FormLabel>Payment Method</FormLabel>
      <FormControl>
        <RadioGroup
          value={value}
          onValueChange={(value) => setValue("paymentMethod", value)}
          className="grid grid-cols-2 gap-4"
        >
          <FormItem>
            <FormControl>
              <RadioGroupItem
                value="card"
                className="peer sr-only"
                id="card"
              />
            </FormControl>
            <label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <CreditCard className="mb-3 h-6 w-6" />
              <div className="text-sm font-medium">Credit Card</div>
            </label>
          </FormItem>
          <FormItem>
            <FormControl>
              <RadioGroupItem
                value="bank"
                className="peer sr-only"
                id="bank"
              />
            </FormControl>
            <label
              htmlFor="bank"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <Landmark className="mb-3 h-6 w-6" />
              <div className="text-sm font-medium">Bank Transfer</div>
            </label>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}