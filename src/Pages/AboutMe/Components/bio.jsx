export default function Bio(props) {
  return (
    <section className={props.classNameChange}>
      <h2 style={{ fontSize: '20px' }}>{props.title}</h2>
      <p>{props.status}</p>
      <p style={{ paddingTop: '5px' }} >{props.date}</p>
      <ul style={{ paddingLeft: '15px' }}>
        <li style={{ paddingTop: '15px' }}>{props.description}</li>
        <li style={{ paddingTop: '15px' }}>{props.descriptionTwo}</li>
      </ul>
    </section>
  );
}
