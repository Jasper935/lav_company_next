import css from './Select.module.css'
import {useEffect, useState} from "react";
import svg from "../../images/symbol-defs.svg";

export const Select = ({
                           name = 'Сортировать',
                           options = [],
                           setSelectedItem = () => '',
                           defaultValue = options[0],
                           autoWidth,
                           localizationType
                       }) => {
    const [selected, setSelected] = useState(defaultValue)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        setSelectedItem(selected)
    }, [selected, isOpen])


    return !localizationType ? (
        <div className={css.select}>

            <div className={css.wrap}>
                <svg
                    className={
                        isOpen
                            ? css.icon + " " + css.iconSelected
                            : css.icon
                    }
                >
                    <use href={`${svg}#icon-swipe`}/>
                </svg>
                <p className={css.selectedText} onClick={() => setIsOpen(pr => !pr)}>{selected}</p>
                {isOpen && <ul className={css.list}>{
                    options.map(el => {
                        return (
                            selected !== el && (<li className={css.item} key={el} onClick={() => {
                                setIsOpen(false)
                                setSelected(el)
                            }
                            }>{el}</li>)

                        )
                    })
                }</ul>}
            </div>
        </div>
    ) : (
        <div className={css.localizationSelect}>
            <div>
                <svg
                    className={
                        isOpen
                            ? css.icon + " " + css.iconSelected
                            : css.icon
                    }
                >
                    <use href={`${svg}#icon-swipe-next`}/>
                </svg>
                <p className={css.selectedText} onClick={() => setIsOpen(pr => !pr)}>{selected}</p>
                {isOpen && <ul className={css.list}>{
                    options.map(el => {
                        return (
                            selected !== el && (<li className={css.item} key={el} onClick={() => {
                                setIsOpen(false)
                                setSelected(el)
                            }
                            }>{el}</li>)
                        )
                    })
                }</ul>}
            </div>
        </div>
    )

}