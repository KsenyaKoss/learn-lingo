import { Field, Formik } from "formik";
import data from "./filtersList.json";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/Teachers/teachersSlice";

const Filter = () => {
    const dispatch = useDispatch();
  return (
    <div>
      <Formik initialValues={{ languages: "", levels: "", price_per_hour: "" }}>
        {(props) => (
          <>
            <Field
              as="select"
              name="languages"
              onChange={(e) => {
                props.setFieldValue("languages", e.target.value, false);
                dispatch(setFilter({ ...props.values, languages: e.target.value }));
              }}
            >
              {data.language.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Field>
            <Field
              as="select"
              name="levels"
              onChange={(e) => {
                props.setFieldValue("levels", e.target.value, false);
               dispatch(setFilter ({ ...props.values, levels: e.target.value }));
              }}
            >
              {data.levels.map((el) => (
                <option key={el} value={el}>
                  {el}
                </option>
              ))}
            </Field>
            <Field
              as="select"
              name="price_per_hour"
              onChange={(e) => {
                props.setFieldValue("price_per_hour", e.target.value, false);
                dispatch(setFilter({ ...props.values, price_per_hour: e.target.value }));
              }}
            >
              {data.price.map((el) => (
                <option key={el} value={el}>
                  {`${el} $`}
                </option>
              ))}
            </Field>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
