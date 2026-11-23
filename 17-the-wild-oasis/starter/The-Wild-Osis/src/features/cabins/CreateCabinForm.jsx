import styled from "styled-components";

import Form from "../../ui/Form";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabin";
import toast from "react-hot-toast";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const Input = styled.input`
  font-family: "Sono";
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-grey-700);
  background-color: var(--color-grey-0);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 1.2rem 1.6rem;

  &:focus {
    outline: 2px solid var(--color-blue-700);
  }
`;

const Button = styled.button`
  font-family: "Sono";
  font-weight: 600;
  color: var(--color-grey-0);
  background-color: var(--color-blue-700);
  padding: 1rem 2.4rem;
  border-radius: 0.4rem;
  font-size: 1.6rem;

  &[type="reset"] {
    background-color: var(--color-grey-200);
    color: var(--color-grey-700);
  }
`;

function CreateCabinForm() {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    defaultValues: {
      max_capacity: 10,
      price: 0,
      discount: 0,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createCabin,
    onSuccess: (data) => {
      toast.success("Cabin created successfully:" + data[0].name);
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (error) => {
      console.error("Error creating cabin:", error);
      toast.error("Error creating cabin !");
    },
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
        <Error>{errors.name?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="max_capacity">Maximum capacity</Label>
        <Input
          type="number"
          id="max_capacity"
          {...register("max_capacity", {
            required: "This field is required",
            min: 1,
          })}
        />
        <Error>{errors.max_capacity?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="price">Regular price</Label>
        <Input
          type="number"
          id="price"
          {...register("price", {
            required: "This field is required",
            min: 0,
          })}
        />
        <Error>{errors.price?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          {...register("discount", {
            required: "This field is required",
            validate: (value) =>
              value <= parseFloat(getValues().price) ||
              "Discount cannot be higher than regular price",
          })}
        />
        <Error>{errors.discount?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
        <Error>{errors.description?.message}</Error>
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput
          id="image"
          type="file"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
        />
        <Error>{errors.image?.message}</Error>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button type="submit" disabled={isPending}>
          {isPending ? "Creating..." : "Create cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
