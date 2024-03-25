export function getOrderStatus(status){
    switch(status){
        case 'ACTIVE':
            return(
                <span className="capatalse py-1 px-2 rounded-md text-xs text-sky-600 bg-green-100">
                    {/* {status.replaceAll('_',' ').toLowerCase()} */}
                    {status.replaceAll('_',' ')}
                </span>
            )

            case 'NOT ACTIVE':
                return(
                    <span className="capatalse py-1 px-2 rounded-md text-xs text-sky-600 bg-orange-100">
                        {status.replaceAll('_',' ')}
                    </span>
                )

        default:
            return(
                <span className="capatalse py-1 px-2 rounded-md text-xs text-sky-600 bg-gray-100">
                        {status.replaceAll('_',' ').toLowerCase()}
                    </span>
            )
    }
}