import PropTypes from 'prop-types';

Bio.propTypes = {
  classNameChange: PropTypes.string.isRequired,
  title: PropTypes.string,
  status: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  descriptionTwo: PropTypes.string,
};

export default function Bio(props) {
  return (
    <section className={props.classNameChange}>
      <h1 style={{ fontSize: '25px' }}>{props.title}</h1>
      <p>{props.status}</p>
      <p style={{ paddingTop: '5px' }} >{props.date}</p>
      <ul style={{ paddingLeft: '15px' }}>
        <li style={{ paddingTop: '15px' }}>{props.description}</li>
        <li style={{ paddingTop: '15px' }}>{props.descriptionTwo}</li>
      </ul>
    </section>
  );
}
