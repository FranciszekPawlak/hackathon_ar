'use client'


export default function CoordinatesForm({ setForm, setCurrentPosition, form, scale, setScale }: any) {

    const submit = (e: any) => {
        e.preventDefault()
        const data = new FormData(e.target);
        setForm({
            latitude: data.get("latitude"),
            longitude: data.get("longitude"),

        })
    }


    return (
        <form onSubmit={submit} style={{
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            left: 10,
            top: 80,
            zIndex: 9998,
            fontSize: 11,
            width: 128
        }}>
            <input name="latitude" style={{ marginBottom: 10, color: "black" }} type="text" placeholder="latitude" />

            <input name="longitude" style={{ marginBottom: 20, color: "black" }} type="text" placeholder="longitude" />

            <button style={{ backgroundColor: "#ed42df", color: "white", marginBottom: 20 }} type="submit">set form coordinates</button>

            <button style={{ backgroundColor: "#ed42df", color: "white", marginBottom: 20 }} onClick={setCurrentPosition}>restore current coords</button>

            {!form.latitude && !form.longitude && <span style={{ backgroundColor: "gray", padding: "4px 8px" }}>No coordinates!!!</span>}

            {form.latitude && form.longitude && <span style={{ backgroundColor: "gray", padding: "4px 8px", marginBottom: 20 }}>{`latitude: ${form.latitude} longitude: ${form.longitude}`}</span>}

            <span style={{ marginBottom: 10 }}>box scale: {scale}</span>
            <button style={{ backgroundColor: "#ed42df", color: "white", marginBottom: 12 }} onClick={() => setScale((prev: any) => prev + 1)}>box size++</button>
            <button style={{ backgroundColor: "#ed42df", color: "white", marginBottom: 20 }} onClick={() => setScale((prev: any) => prev - 1)}>box size--</button>

        </form>
    )
}