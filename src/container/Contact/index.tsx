"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // handle form submission logic here
  };

  return (
    <section className="container space-y-8" id="Contact">
      <h2 className="subheading">Have Questions or Need Assistance?</h2>
      <div className="flex items-stretch justify-between gap-8 w-full">
        <form
          className="px-12 py-4 bg-secondary-50/20 rounded-md shadow-md space-y-1 w-full"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col max-w-md gap-2">
            <label
              className={cn(
                errors.name ? "text-red-500" : "text-primary-800",
                "text-lg font-semibold"
              )}
              htmlFor="name">
              Name
            </label>
            <input
              className={cn(
                errors.name
                  ? "border-red-500 focus-visible:border-red-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-red-500"
                  : "border-accent focus:outline-none focus-visible:ring-0 focus:border-secondary-900",
                "rounded-md outline-none bg-transparent caret-primary-700 focus-visible:outline-none  border-1 p-2"
              )}
              {...register("name", { onBlur: () => clearErrors("name") })}
            />
            <span
              className={cn(
                errors.name ? "visible" : "invisible",
                "text-red-500 font-mono  font-light"
              )}>
              {errors.name ? errors.name.message : "f"}
            </span>
          </div>
          <div className="flex flex-col max-w-md gap-2">
            <label
              className={cn(
                errors.email ? "text-red-500" : "text-primary-800",
                "text-lg font-semibold"
              )}
              htmlFor="email">
              Email:
            </label>
            <input
              className={cn(
                errors.name
                  ? "border-red-500 focus-visible:border-red-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-red-500"
                  : "border-accent focus:outline-none focus-visible:ring-0 focus:border-secondary-900",
                "rounded-md outline-none bg-transparent caret-primary-700  focus-visible:outline-none  border-1 p-2"
              )}
              {...register("email", { onBlur: () => clearErrors("email") })}
            />
            <span
              className={cn(
                errors.email ? "visible" : "invisible",
                "text-red-500 font-mono font-light"
              )}>
              {errors.email ? errors.email.message : "f"}
            </span>
          </div>

          <div className="flex flex-col max-w-md gap-2">
            <label
              className={cn(
                errors.email ? "text-red-500" : "text-primary-800",
                "text-lg font-semibold"
              )}
              htmlFor="message">
              Message:
            </label>
            <textarea
              draggable={false}
              rows={5}
              cols={30}
              className={cn(
                errors.name
                  ? "border-red-500 focus-visible:border-red-500 focus:outline-none focus-visible:ring-0 focus-visible:ring-red-500"
                  : "border-accent focus:outline-none focus-visible:ring-0 focus:border-secondary-900",
                "rounded-md outline-none bg-transparent resize-none caret-primary-700  h-40 focus-visible:outline-none  border-1 p-2"
              )}
              {...register("message", { onBlur: () => clearErrors("message") })}
            />
            <span
              className={cn(
                errors.message ? "visible" : "invisible",
                "text-red-500 font-mono font-light"
              )}>
              {errors.message ? errors.message.message : "f"}
            </span>
          </div>
          <Button size="lg" type="submit">
            Submit
          </Button>
        </form>{" "}
        <div className="w-full relative">
          <Image
            className="rounded-lg shadow-md shadow-secondary-100"
            src="/images/IMS_2.jpg"
            fill
            alt="contact"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
