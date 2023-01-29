/**
 * Open–closed principle
 */

interface IRequisitesProps {
    onSave: (obj) => void;
    onReset: () => void;
    title: string;
}

const Requisites = (props: IRequisitesProps) => {
    const {
        onSave,
        onReset,
        title
    } = props;

    return (
        <form>
            <h1>{title}</h1>
            <input type="text" placeholder="ИНН"/>
            <input type="text" placeholder="БИК"/>
            <input type="text" placeholder="НАЗВАНИЕ БАНКА"/>
            <input type="text" placeholder="НОМЕР СЧЕТА"/>
            <button onClick={onReset}>Clear</button>
            <button onClick={onSave}>Save</button>
        </form>
    );
};

const ForeignRequisites = (props: IRequisitesProps) => {
    const onSave = () => {
    };
    const onReset = () => {
    };

    return (
        <div>
            <input type="text" placeholder="SWIFT"/>
            <input type="text" placeholder="KPP"/>
            <input type="text" placeholder=""/>

            <Requisites
                onSave={onSave}
                onReset={onReset}
                title={'Foreign Requisites'}
            />
        </div>
    );
};
