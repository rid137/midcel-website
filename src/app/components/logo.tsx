import Link from "next/link"

const Logo = () => {
    return (
        <div className="">
            <Link href="/">
                <svg width="168" height="30" viewBox="0 0 168 35" fill="none" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink">
                    <rect width="168" height="34.17" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_1296_112" transform="scale(0.00581395 0.0285714)"/>
                    </pattern>
                    <image id="image0_1296_112" width="172" height="35" xlinkHref="data:image/png;base64,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"/>
                    </defs>
                </svg>
            </Link>
        </div>
    )
}

export default Logo