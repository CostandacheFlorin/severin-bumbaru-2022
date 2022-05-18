import React from "react";
import HouseIcon from "@mui/icons-material/House";
import {
  InternshipContainer,
  InternshipTitle,
  InternshipInfo,
  InternshipCompany,
  InternshipKnowledge,
  InternshipDate,
  InternshipSpots,
  InternshipDescription,
  InternshipLocation,
} from "./Internship.styled";
import Text from "../../UIElements/Typography/Text";
const Internship = ({
  title,
  location,
  type,
  company,
  skills,
  startingDate,
  spots,
  description,
}) => {
  return (
    <InternshipContainer>
      <InternshipTitle>
        <Text
          type="title"
          size="small"
          bold="true"
          margin="1rem"
          color="#004abf"
        >
          {title}
        </Text>
      </InternshipTitle>
      <InternshipInfo>
        <InternshipLocation>
          <HouseIcon />
          <Text type="text" margin="0 1rem 0 0" bold="true">
            {location}
          </Text>
        </InternshipLocation>
        <Text type="text" margin="0 1rem" bold="true">
          {type}
        </Text>{" "}
      </InternshipInfo>
      <InternshipCompany>
        <Text type="text" size="large" bold="true">
          {company}
        </Text>
      </InternshipCompany>
      <InternshipKnowledge>
        {skills.map((skill) => (
          <Text key={skill.skill} type="text">{skill.skill}</Text>
        ))}
      </InternshipKnowledge>
      <InternshipDate>
        <Text
          type="text"
          bold="true"
          margin="1rem"
        >{`Incepe pe: ${startingDate}`}</Text>{" "}
        <Text type="text" bold="true" margin="1rem">
          Durata de desfasurare: 90 de zile
        </Text>{" "}
      </InternshipDate>
      <InternshipSpots>
        <Text
          type="text"
          bold="true"
          margin="1rem"
        >{`Numar de locuri: ${spots}`}</Text>
      </InternshipSpots>
      <InternshipDescription>
        <Text type="text" bold="true">
          {description}
        </Text>{" "}
      </InternshipDescription>
    </InternshipContainer>
  );
};

export default Internship;