"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import ScrollButton from "./ScrollButton";
import { services } from "@/app/service/data";

const servicesData = [
  { value: "all", name: "Весь комплекс" },
  ...services.map(({ value, name }) => ({ value, name })),
];

// Validation rules
const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Имя должно состоять не менее чем из 3 символов.",
    })
    .max(30, {
      message: "Имя не должно превышать 30 символов.",
    }),

  phone: z
    .string()
    .min(10, {
      message: "Телефон должен состоять не менее чем из 10 цифр.",
    })
    .max(13, {
      message: "Телефон не должен превышать 13 символов.",
    })
    .regex(/^(?:\+?380\d{9}|\+?1\d{10}|\+?7\d{10}|\+?49\d{10}|\+?48\d{9})$/, {
      message:
        "Неверный формат телефона! '+' в начале необязателен. Пример: +380XXXXXXXXX ",
    }),

  email: z.string().min(1, { message: "Это поле обязательно." }).email({
    message: "Неверный формат электронной почты.",
  }),

  message: z.string().min(1, { message: "Это поле обязательно." }),
});

export default function DiscussionForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const { toast } = useToast();
  const [checkboxStates, setCheckboxStates] = useState(
    servicesData.map(() => false),
  );

  const handleCheckboxChange = (index) => (checked) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = checked;
    setCheckboxStates(newCheckboxStates);
  };

  async function onSubmit(formInputs) {
    if (!formInputs) return;

    // Find all checked checkboxes
    const checkedValues = checkboxStates
      .map((checked, index) => (checked ? servicesData[index].value : null))
      .filter(Boolean)
      .join(", ");

    // Add the checked values to form inputs
    const inputsWithChecked = {
      ...formInputs,
      checked: checkedValues,
    };

    console.log(inputsWithChecked);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputsWithChecked),
      });

      const data = await response.json();

      if (!data.ok) throw new Error("Error sending!");

      // Show notification
      toast({
        title: "Форма успешно отправлена!",
        description: `${formInputs.name}, мы свяжемся с вами в ближайшее время.`,
      });

      // Clear form inputs
      form.reset();
    } catch (error) {
      toast({
        title: "Ошибка при отправке формы",
        description: "Попробуйте еще раз или свяжитесь с нами по телефону.",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-[50px]">
        <p className="mb-[30px] text-3xl">Хочу обсудить</p>
        {/* Checkboxes */}
        <ul className="space-y-[30px]">
          {servicesData.map((service, index) => (
            <li key={index} className="flex items-center gap-x-[20px]">
              <Checkbox
                id={`check-${index + 1}`}
                checked={checkboxStates[index]}
                value={service.value}
                onCheckedChange={handleCheckboxChange(index)}
              />

              <label
                className="cursor-pointer text-xl"
                htmlFor={`check-${index + 1}`}
              >
                {service.name}
              </label>
            </li>
          ))}
        </ul>

        {/* Name */}
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Телефон" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Почта" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          name="message"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Сообщение" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Button submit */}
        <ScrollButton text="Обсудить проект" scrollInto="discussion" isSubmit />
      </form>
    </Form>
  );
}