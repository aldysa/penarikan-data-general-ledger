import React from "react";
import { Select, Space } from "antd";
import type { SelectProps } from "antd";

interface SelectedOptionProps {
  options: SelectProps["options"];
  defaultValue?: string[];
  onChange?: (value: string[]) => void;
}

const SelectedOption: React.FC<SelectedOptionProps> = ({
  options,
  defaultValue,
  onChange,
}) => {
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Space style={{ width: "150%" }} direction="vertical">
      <Select
        allowClear
        style={{ width: "150%" }}
        placeholder="Please select"
        defaultValue={defaultValue}
        onChange={handleChange}
        options={options}
      />
    </Space>
  );
};

export default SelectedOption;
