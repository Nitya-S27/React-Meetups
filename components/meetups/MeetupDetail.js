import React from "react";
import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <React.Fragment>
      <section className={classes.detail}>
        <img
          src={props.image}
          alt={props.title}
          className={classes.marginChng}
        />
        <h1 className={classes.marginChng}>{props.title}</h1>
        <address className={classes.marginChng}>{props.address}</address>
        <p className={classes.marginChng}>{props.description}</p>
      </section>
    </React.Fragment>
  );
};

export default MeetupDetail;
