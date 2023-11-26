"use client"

import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd"
import { Card } from "@prisma/client";
import { useCardModal } from "@/hooks/use-card-modal";

interface CardItemProps {
    data: Card,
    index: number;
}

export const CardItem = ({ data, index } : CardItemProps) => {
    const cardModal = useCardModal()
    return (
        <Draggable draggableId={data.id} index={index}>
            {(provided) => (
                <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    role="button" 
                    onClick={() => cardModal.onOpen(data.id)}
                    className="border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-md flex flex-col space-y-1 flex-wrap"
                >
                    {/* <div className="flex space-x-2">
                        <div className="h-2 w-8 bg-blue-500 rounded-lg"></div>
                        <div className="h-2 w-8 bg-red-500 rounded-lg"></div>
                    </div> */}
                    <div className="line-clamp-2">{data.title}</div>
                </div>
            )}
        </Draggable>
    );
}