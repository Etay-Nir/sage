'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // TODO: Implement form submission
  };

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="container px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-8">
            Join Our Initial Design Partners Program
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                className="w-full p-3 bg-secondary rounded-lg border border-gray-700"
                placeholder="Your Name"
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="w-full p-3 bg-secondary rounded-lg border border-gray-700"
                placeholder="Your Email"
                type="email"
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full p-3 bg-secondary rounded-lg border border-gray-700 h-32"
                placeholder="Your Message"
              />
              {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
            </div>

            <button 
              type="submit"
              className="w-full py-3 bg-accent text-white rounded-lg font-bold hover:bg-accent/90 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
