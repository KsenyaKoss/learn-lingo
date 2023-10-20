import { Field, Formik } from "formik";
import data from "./filtersList.json";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/Teachers/teachersSlice";
import { FilterWrp, OneFilterWrp, OptionStyled, StyledLabel, StyledSelect } from "./FilterStyled";


const Filter = () => {
    const dispatch = useDispatch();
  return (
    <FilterWrp>
      <Formik initialValues={{ languages: "", levels: "", price_per_hour: "" }}>
        {(props) => (
          <>
         <OneFilterWrp>
         <StyledLabel htmlFor="languages">Languages</StyledLabel>
            <Field
              as={StyledSelect}
              name="languages"
              onChange={(e) => {
                props.setFieldValue("languages", e.target.value, false);
                dispatch(setFilter({ ...props.values, languages: e.target.value }));
              }}
            >
              {data.language.map((el) => (
                <OptionStyled key={el} value={el}>
                  {el}
                </OptionStyled>
              ))}
            </Field>
         </OneFilterWrp>
            <OneFilterWrp>
            <StyledLabel htmlFor="levels">Level of knowledge</StyledLabel>
            <Field
              as={StyledSelect}
              name="levels"
              onChange={(e) => {
                props.setFieldValue("levels", e.target.value, false);
               dispatch(setFilter ({ ...props.values, levels: e.target.value }));
              }}
            >
              {data.levels.map((el) => (
                <OptionStyled  key={el} value={el}>
                  {el}
                </OptionStyled>
              ))}
            </Field>
            </OneFilterWrp>
           <OneFilterWrp>
           <StyledLabel htmlFor="price_per_hour">Price</StyledLabel>
            <Field
              as={StyledSelect}
              name="price_per_hour"
              onChange={(e) => {
                props.setFieldValue("price_per_hour", e.target.value, false);
                dispatch(setFilter({ ...props.values, price_per_hour: e.target.value }));
              }}
            >
              {data.price.map((el) => (
                <OptionStyled key={el} value={el}>
                  {`${el} $`}
                </OptionStyled>
              ))}
            </Field>
           </OneFilterWrp>
          </>
        )}
      </Formik>
    </FilterWrp>
  );
};

export default Filter;
