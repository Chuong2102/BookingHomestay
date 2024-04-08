const MenuItem = function (props) {
    return(
        <div className="px-3 py-3 font-semibold hover:bg-neutral-100 trasition">
            {props.label}
        </div>
    );
}

export default MenuItem;