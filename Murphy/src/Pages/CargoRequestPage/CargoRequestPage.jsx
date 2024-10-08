import React, { useEffect, useState } from "react";
import "./CargoRequestPage.scss";
import NotMean from "../../Components/NotMean/NotMean";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "../../Image/back.jpg";

const token = localStorage.getItem("token");

function CargoRequestPage() {
  const [select1Data, setSelect1Data] = useState([]);
  const [select2Data, setSelect2Data] = useState([]);
  const [select3Data, setSelect3Data] = useState([]);
  const navigate = useNavigate();

  const initialValues = {
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    address: "",
    loadName: "",
    loadWeight: "",
    loadCapasity: "",
    services: "",
    toCountry: "",
    fromCountry: "",
  };

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required("Company Name is required"),
    companyEmail: Yup.string()
      .email("Invalid email format")
      .required("Company Email is required"),
    companyPhone: Yup.string().required("Company Phone is required"),
    address: Yup.string().required("Address is required"),
    loadName: Yup.string().required("Load Name is required"),
    loadWeight: Yup.number().required("Load Weight is required"),
    loadCapasity: Yup.number().required("Load Capacity is required"),
    services: Yup.string().required("Service is required"),
    toCountry: Yup.string().required("To Country is required"),
    fromCountry: Yup.string().required("From Country is required"),
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const res1 = await axios.get(
          "http://thetest-001-site1.ftempurl.com/api/Services/Get?page=1&take=6"
        );
        setSelect1Data(res1.data);

        const res2 = await axios.get(
          "http://thetest-001-site1.ftempurl.com/api/ToCountries/Get?page=1&take=200"
        );
        setSelect2Data(res2.data);

        const res3 = await axios.get(
          "http://thetest-001-site1.ftempurl.com/api/FromCountries/Get?page=1&take=200"
        );
        setSelect3Data(res3.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    try {
      const res = await axios.post(
        "http://thetest-001-site1.ftempurl.com/api/Orders/Create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Əlavə edildi...");
      navigate("/");
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("An error occurred while submitting the request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <NotMean />
      <section
        id="cargoRequestPage"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <p>Client Trust Us</p>
              <label>Cargo Request Quote</label>
              <div className="allInPutBox">
                <div className="ipnutBox">
                  <Field
                    type="text"
                    name="companyName"
                    placeholder="Company Name..."
                  />
                  <ErrorMessage className="err" name="companyName" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field
                    type="email"
                    name="companyEmail"
                    placeholder="Company Email..."
                  />
                  <ErrorMessage className="err" name="companyEmail" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field
                    type="text"
                    name="companyPhone"
                    placeholder="Company Phone..."
                  />
                  <ErrorMessage className="err" name="companyPhone" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field type="text" name="address" placeholder="Address..." />
                  <ErrorMessage className="err" name="address" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field
                    type="text"
                    name="loadName"
                    placeholder="Load Name..."
                  />
                  <ErrorMessage className="err" name="loadName" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field
                    type="number"
                    name="loadWeight"
                    placeholder="Load Weight..."
                  />
                  <ErrorMessage className="err" name="loadWeight" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field
                    type="number"
                    name="loadCapasity"
                    placeholder="Load Capacity..."
                  />
                  <ErrorMessage className="err" name="loadCapasity" component="div" />
                </div>

                <div className="ipnutBox">
                  <Field as="select" name="services">
                    <option value="" hidden>
                      Choose Service...
                    </option>

                    {select1Data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage className="err" name="services" component="div" />
                </div>
                <div className="ipnutBox">
                  <Field as="select" name="toCountry">
                    <option value="" hidden>
                      Choose To Country...
                    </option>

                    {select2Data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage className="err" name="toCountry" component="div" />
                </div>
                <div className="ipnutBox">
                  <Field as="select" name="fromCountry">
                    <option value="" hidden>
                      Choose From Country...
                    </option>

                    {select3Data.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage className="err" name="fromCountry" component="div" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting}>
                Comparison
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}

export default CargoRequestPage;
