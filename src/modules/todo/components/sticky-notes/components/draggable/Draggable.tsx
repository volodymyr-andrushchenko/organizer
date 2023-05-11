import { useState } from 'react'
import * as classes from './Draggable.module.scss'

type DraggableProps = {
    onDragStart: (text: string) => void
    onDragEnd: () => void
}

export default function Draggable({ onDragStart, onDragEnd }: DraggableProps) {
    const [inputText, setInputTest] = useState('')

    function onDragStartHandler(e: React.DragEvent<HTMLDivElement>) {
        // this is a hack for firefox, copied it from the docs
        e.dataTransfer.setData("text/plain", "")
        // ----

        onDragStart(inputText)
    }

    function onDragEndHandler() {
        setInputTest('')
        onDragEnd()
    }


    return (
        <div
            className={classes.draggable}
            draggable={true}
            data-value='1'
            onDragStart={onDragStartHandler}
            onDragEnd={onDragEndHandler}
        >
            <input value={inputText} onChange={e => setInputTest(e.target.value)} />
            Droppable Element (Drag me!)
        </div>
    )
}