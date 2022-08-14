import * as Yup from "yup";

export const createSchema = (validations) => {
  let shape = {};
  for (let i = 0; i < validations.length; i++) {
    let _type = validations[i].type;
    let _key = validations[i].name;
    let _required = validations[i].required;
    let _req_msg = validations[i].req_msg;
    let _err_msg = validations[i].err_msg;
    let _min_date = validations[i].min_date;
    let _max_date = validations[i].max_date;
    let _matches = validations[i].matches;
    let _min = validations[i].min;
    let _max = validations[i].max;
    let _label = validations[i]?.labelText;

    if (_type === "email") {
      shape[_key] = Yup.string().email(
        _err_msg || "Please provide a valid email addess"
      );
    } else if (_type === "number") {
      shape[_key] = Yup.number();
      if (_min)
        shape[_key] = shape[_key].min(
          _min,
          "Minimum length should " + _min + ""
        );
      if (_max)
        shape[_key] = shape[_key].max(
          _max,
          "Maximum length should " + _max + ""
        );
    } else if (_type === "array") {
      shape[_key] = Yup.array().min(
        1,
        _req_msg || `The field ${_key} is required`
      );
    } else if (_key === "phone_no") {
      shape[_key] = Yup.string().matches(
        /^\s*(?:\+?(\d{1,3}))*(?: *x(\d+))?\s*$/,
        "Phone number is not valid"
      );
    } else if (_type === "date") {
      shape[_key] = Yup.string().nullable();
    }else if (_type === "region") {
      shape[_key] = Yup.string();
    } else if (_type === "location") {
      shape[_key] = Yup.mixed();
    }else if (_type === "driver") {
      shape[_key] = Yup.mixed();
    } else if (_type === "boolean") {
      shape[_key] = Yup.boolean();
    } else if (_type === "image") {
      shape[_key] = Yup.string().nullable();
    } else {
      shape[_key] = Yup.string();
      if (_min)
        shape[_key] = shape[_key].min(
          _min,
          "Minimum length should " + _min + ""
        );
      if (_max)
        shape[_key] = shape[_key].max(
          _max,
          `Maximum length of ${_key} should be ${_max}`
        );
      if (_matches)
        shape[_key] = shape[_key].matches(
          _matches,
          _err_msg || "Invalid value"
        );
    }

    if (_required) {
      shape[_key] = shape[_key].required(
        _req_msg ||
          `The field ${_label ? _label : _key.replace("_", " ")} is required`
      );
    }

    if (_key === "cpassword") {
      shape["cpassword"] = Yup.mixed().test(
        "match",
        "Password and Confirm Password does not match",
        function (password) {
          return password === this.parent.password;
        }
      );
    }
  }

  return Yup.object().shape(shape);
};

export const createInitialValues = (fields, initialVal = {}) => {
  let initialValues = {};
  fields &&
    fields.map((field) => {
      if (field.type === "CheckBox") {
        field.options.map((option) => {
          initialValues[option.name] = option.value;
        });
      } else {
        initialValues[field.name] = field.value ? field.value : "";
      }
    });
  // return initialValues;
  return { ...initialValues, ...initialVal };
};

export const password_conditions =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const verifyPassword = (value) => {
  if (!/[A-Z]/.test(value))
    return "Password must contain Atleast 1 Uppercase letter";
  else if (!/[a-z]/.test(value))
    return "Password must contain Atleast 1 Lowercase letter";
  else if (!/[0-9]/.test(value))
    return "Password must contain Atleast 1 Numeric character";
  else if (!/[!@#\$%\^&\*]/.test(value))
    return "Password must contain Atleast 1 Special character";
  else if (value.length < 8)
    return "Password must contain Minimum 8 characters";
  return "";
};
