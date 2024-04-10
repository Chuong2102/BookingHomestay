const Heading = (props) => {
    return ( 
        <div className={props.center ? 'text-center' : 'text-start'}>
          <div className="text-2xl font-bold">
            {props.title}
          </div>
          <div className="font-light text-neutral-500 mt-2">
            {props.subtitle}
          </div>
        </div>
       );
}

export default Heading;