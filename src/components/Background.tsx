export const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />
            <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
    );
};
