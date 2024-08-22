import { useAnimationControls, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const Second = () => {

    //animation의 모습을 정의해 놓은 변수들 객체
    const bsVariants={
        close:{y:'100%'},
        open:{y:0}
    }

    const controls= useAnimationControls()

    return (
        <div>
            <button onClick={()=>controls.start('open')}>open bottom sheet</button>
            <button onClick={()=>controls.start('close')}>close bottom sheet</button>

            {/* bottom sheet */}
            <BottomSheet
                variants={bsVariants}
                initial='close'
                animate={controls}

                drag='y'
                dragConstraints={{top:0}}
                onDragEnd={(event, info)=> {
                    if(info.delta.y>10) controls.start('close')
                }}
            >
                <BottomSheetHandle></BottomSheetHandle>
            </BottomSheet>
        </div>
    )
}

export default Second

//스타일이된 버텀시트 컴포넌트 - 단, motion
const BottomSheet= styled(motion.div)`
    background-color: white;
    box-shadow: 0 0 10px gray;
    height: 70vh;
    position: fixed;
    top: 50vh;
    left:0;
    right: 0;
    border-top-left-radius:16px;
    border-top-right-radius: 16px;
    width: 96%;
    margin: 0 auto;
`
const BottomSheetHandle = styled.div`
    width: 50px;
    height: 6px;
    background-color: silver;
    border-radius: 3px;
    margin: 16px auto;
`