interface CardProps {
    children: React.ReactNode;
}

export const Card = ({children}: CardProps) => {
    return(
        <div className="bg-gray-100 min-h-screen min-w-screen flex sm:px-4 ">
            {children}
        </div>
    )
}