// import React from 'react';
// import { Switch } from 'antd';

// interface SwitchComponentProps {
//   checked?: boolean;
//   onChange?: (checked: boolean) => void;
// }

// const SwitchComponent: React.FC<SwitchComponentProps> = ({
//   checked = false,
//   onChange = (checked) => console.log(`switch to ${checked}`), // Default onChange handler
// }) => (
//   <Switch
//     defaultChecked={checked}
//     onChange={onChange}
//   />
// );


import React from 'react';
import { Switch } from 'antd';

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const SwitchComponent: React.FC = () => <Switch onChange={onChange} />;

export default SwitchComponent;
