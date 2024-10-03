/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../products.api";
import { useParams, useRouter } from "next/navigation";

export function ProductForm({ product }: any) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
        name: product?.name,
        description: product?.description,
        price: product?.price,
        image: product?.image
    }
    });
    const router = useRouter();
    const params = useParams<{id: string}>();

    const onSubmit = handleSubmit(async (data) => {
        if (params?.id) {
            await updateProduct(params.id, {
                ...data,
                price: parseFloat(data.price)
            })
        } else { 
            await createProduct({
                ...data,
                price: parseFloat(data.price),
            });
        }

        router.push('/');
        router.refresh();
    });

    return(
        <form onSubmit={onSubmit}>
            <Label >Product name</Label>
            <Input {...register('name')}/>

            <Label >Description</Label>
            <Input {...register('description')}/>

            <Label >Price</Label>
            <Input {...register('price')}/>

            <Label >Image</Label>
            <Input {...register('image')}/>

            <Button >
                {
                    params.id ? 'Update Product' : 'Create Product'
                }
            </Button>
        </form>
    )
}