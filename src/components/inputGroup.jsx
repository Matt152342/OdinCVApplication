function InputGroup ({dataKey, id, labelText, onChange, placeholder, type, value}) {

    return (
        <div className="inputGroup">
            <label htmlFor={id} className="labelText">
                {labelText}
            </label>

            {type === "textarea" ? 
                (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    data-key={dataKey}
                    onChange={onChange}
                />
                ) : (
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    data-key={dataKey}
                    onChange={onChange}
                />
            )}
        </div>
    )
}

export default InputGroup;