import React from "react";
import { Col } from './style';
import { formatTimestamp } from '../../__utils/helpers';

type Props = {
  label: string;
  data: number | string | undefined;
};

const DynamicRow: React.FC<Props> = ({ label, data }: Props) => {
  const convertedLabel = label
    .split(/(?=[A-Z])/) // Split the string at uppercase letters
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' ');

  const convertedData = convertedLabel.toLowerCase().includes("time") ? formatTimestamp(data as string) : data;

  return (
    <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12} className="dynamic-row-label">
      <div className="container">
        <div className="item">
          <span className="key"> {convertedLabel} : </span>
          <span className="value">{convertedData}</span>
        </div>
      </div>
    </Col>
  );
};

export default DynamicRow;
