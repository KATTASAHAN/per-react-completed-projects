import Meetupitem from "./Meetupitem";
import classes from "./Meetuplist.module.css";

function Meetuplist(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <Meetupitem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default Meetuplist;
