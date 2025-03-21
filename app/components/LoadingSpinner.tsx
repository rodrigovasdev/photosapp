export default function Spinner() {
    return (
        <>
            <div className="fixed inset-0 flex justify-center items-center bg-neutral-300">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            </div>
        </>
    );
}
  