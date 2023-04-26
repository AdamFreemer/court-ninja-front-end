export default function FormField(props) {
  return (
    <div className="sm:col-span-2">
      <label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
        {props.fieldName}
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="region"
          id="region"
          autoComplete="address-level1"
          className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
}