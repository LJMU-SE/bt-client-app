import TextInput from "./TextInput";

export default function CaptureSettingsForm({ isoRef, shutterSpeedRef }) {
    return (
        <div className="w-full h-auto">
            <TextInput
                ref={isoRef}
                label={"ISO"}
                type="number"
                placeholder={1000}
                min={100}
                max={3000}
                step={100}
                required={true}
                defaultValue={1000}
                list={"defaultISO"}
            />

            <datalist id="defaultISO">
                <option value={100}></option>
                <option value={200}></option>
                <option value={400}></option>
                <option value={800}></option>
                <option value={1600}></option>
                <option value={3000}></option>
            </datalist>

            <TextInput
                ref={shutterSpeedRef}
                label={"Shutter Speed"}
                type="number"
                placeholder={1000}
                required={true}
                defaultValue={1000}
                min={1}
                max={2500}
                list={"defaultShutterSpeed"}
            />

            <datalist id="defaultShutterSpeed">
                <option value={2500}>f/2500</option>
                <option value={1000}>f/1000</option>
                <option value={200}>f/200</option>
                <option value={125}>f/25</option>
                <option value={50}>f/50</option>
                <option value={8}>f/8</option>
                <option value={2}>f/2</option>
                <option value={1}>f/1</option>
            </datalist>
        </div>
    );
}
