import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
    Box,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

export default function BookingForm(props) {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();
    const {updateTimes} = props;
    const url = "http://localhost";

    const formik = useFormik({
        initialValues: {
          date: '',
          time: '',
          guests: '1',
          occasion: 'Birthday',
          comment: '',
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            guests: Yup.string().required('Number of guests is required'),
            occasion: Yup.string().required('Occasion is required'),
        }),
        onSubmit: (values) => {
            submit(url,values);
        },
      });

      useEffect(() => {
        if (isLoading) {
          console.log('Loading...');
        } else {
            if(response != null) {
                onOpen(response.type, response.message);
                if(response.type === 'success') {
                formik.resetForm();
                }
            }
        }
      }, [isLoading]);
    
      return (
        <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Reserve a Table
        </Heading>
        <Box p={6} rounded="md" w="100%">
                <form
                style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
                onSubmit={formik.handleSubmit}
                >
                    <FormControl isInvalid={false}>
                        <FormLabel htmlFor="date">Choose date *</FormLabel>
                        <Input
                            type="date"
                            id="date"
                            name="date"
                            onInput={(event) => updateTimes({date: event.target.value})}
                            style={{
                                borderColor: formik.errors.date && formik.touched.date ? 'red' : 'inherit',
                                borderWidth: formik.errors.date && formik.touched.date ? '2px' : '1px'
                            }}
                            {...formik.getFieldProps('date')}
                        />
                        {formik.touched.date && formik.errors.date ? (
                                <div style={{
                                color: formik.errors.date && formik.touched.date ? 'red' : 'inherit',
                                }}>{formik.errors.date}</div>
                            ) : null}
                            <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={false}>
                        <FormLabel htmlFor="time">Choose time *</FormLabel>
                        <Select
                            id="time"
                            name="time"
                            style={{
                                borderColor: formik.errors.time && formik.touched.time ? 'red' : 'inherit',
                                borderWidth: formik.errors.time && formik.touched.time ? '2px' : '1px'
                            }}
                            {...formik.getFieldProps('time')}
                        >
                            {props.availableTimes.map((time) => <option key={time.id}>{time.time}</option>)}
                        </Select>
                        {formik.touched.time && formik.errors.time ? (
                                <div style={{
                                color: formik.errors.time && formik.touched.time ? 'red' : 'inherit',
                                }}>{formik.errors.time}</div>
                            ) : null}
                            <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                
                    <FormControl>
                        <FormLabel htmlFor="guests">Number of guests</FormLabel>
                        <Input
                            type="number"
                            id="guests"
                            name="guests"
                            placeholder="1"
                            min="1"
                            max="10"
                            style={{
                                borderColor: formik.errors.guests && formik.touched.guests ? 'red' : 'inherit',
                                borderWidth: formik.errors.guests && formik.touched.guests ? '2px' : '1px'
                            }}
                            {...formik.getFieldProps('guests')}
                        />
                        {formik.touched.guests && formik.errors.guests ? (
                                <div style={{
                                color: formik.errors.guests && formik.touched.guests ? 'red' : 'inherit',
                                }}>{formik.errors.guests}</div>
                            ) : null}
                            <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="occasion">Occasion</FormLabel>
                        <Select
                            id="occasion"
                            name="occasion"
                            style={{
                                borderColor: formik.errors.occasion && formik.touched.occasion ? 'red' : 'inherit',
                                borderWidth: formik.errors.occasion && formik.touched.occasion ? '2px' : '1px'
                            }}
                            {...formik.getFieldProps('occasion')}
                        >
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Select>
                        {formik.touched.occasion && formik.errors.occasion ? (
                                <div style={{
                                color: formik.errors.occasion && formik.touched.occasion ? 'red' : 'inherit',
                                }}>{formik.errors.occasion}</div>
                            ) : null}
                            <FormErrorMessage></FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={false}>
                        <FormLabel htmlFor="comment">Additional preferences</FormLabel>
                        <Textarea
                        id="comment"
                        name="comment"
                        {...formik.getFieldProps('comment')}
                        height={250}
                        />
                    </FormControl>
                    <Button className="btn btn-primary" width="full">
                        Make Your reservation
                    </Button>
                </form>
                </Box>
            </VStack>
      )
};
