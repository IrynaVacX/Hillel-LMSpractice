import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

// Create validation zod-schema
const TaskSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(50, "Title must not exceed 50 characters")
    .nonempty("Task title is required"),
  description: z
    .string()
    .max(200, "Description must not exceed 200 characters")
    .optional(),
  priority: z.enum(["low", "medium", "high"], "Select a valid priority"),
});

export default function TodoForm({ onSubmit }) {
  const initialValues = {
    title: "",
    description: "",
    priority: "medium",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Task:", values);
    onSubmit(values);
    resetForm(); // Reset the form
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={toFormikValidationSchema(TaskSchema)}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="title">Task Title:</label>
            <Field
              type="text"
              id="title"
              name="title"
              placeholder="Enter the task title"
            />
            <ErrorMessage
              name="title"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="description">Task Description:</label>
            <Field
              as="textarea"
              id="description"
              name="description"
              placeholder="Enter the task description"
            />
            <ErrorMessage
              name="description"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <div>
            <label htmlFor="priority">Task Priority:</label>
            <Field as="select" id="priority" name="priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </Field>
            <ErrorMessage
              name="priority"
              component="div"
              style={{ color: "red" }}
            />
          </div>

          <button type="submit">Add</button>
        </Form>
      )}
    </Formik>
  );
}
