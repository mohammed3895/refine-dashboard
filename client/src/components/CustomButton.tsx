import { Button, bgcolor } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { CustomButtonProps } from 'interfaces/common'


const CustomButton = ({ type, title, icon, backgroundColor, color, handleClick }: CustomButtonProps) => {
    

    return (
        <Button
            type={type === "submit" ? "submit" : "button" }
            sx={{
                padding: "7px 14px",
                bgcolor: {backgroundColor},
                color: {color},
                gap: 1,
                "&:hover": {
                    bgcolor: "#1e1e1ee0"
                }
            }}
            onClick={handleClick}
        >
            {title}
            {icon}
        </Button>
    )
}

export default CustomButton