import { useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import Modals from '../Modals/Modal/Modal';
// import WaterModal from '../Modals/WaterModal/WaterModal';
// import LogOutModal from '../Modals/LogOutModal/LogOutModal';
import UserSettingsModal from '../Modals/UserSettingsModal/UserSettingsModal';
import css from './AddSettingBtn.module.css';

export default function AddSettingBtn() {
  //     const filter = useSelector(selectFilter);
  //   const dispatch = useDispatch();
  //   const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [update, setUpdate] = useState(null);
  const [modIsOpen, setModIsOpen] = useState(false);
  const styleNameClass = {
    modalDelete: 'modalDelete',
    btnDelete: 'btnDelete',
    modalSetting: 'modalSetting',
    btnSetting: 'btnSetting',
    modalWater: 'Modal',
    btnWater: 'btnWater',
  };

  const handleAddWater = (id) => {
    setUpdate(1);
    setModIsOpen(true);
    setSelectedContactId(id);
  };

  const closeModalUpdate = () => {
    setModIsOpen(false);
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => handleAddWater(1)}
        className={css.btn}
      >
        {' '}
        <CiSettings />
        Setting
      </button>
      {update !== null && (
        <Modals
          styleVariantBtn={styleNameClass.btnSetting}
          styleVariant={styleNameClass.modalSetting}
          isOpen={modIsOpen}
          closeModal={closeModalUpdate}
        >
          <div>
            {/* тут втавляєм потрібний компонент */}
            {/* <WaterModal/> */}
            <UserSettingsModal closeModal={closeModalUpdate} />
            {/* <LogOutModal closeModal={closeModalUpdate} /> */}
            {/* <WaterForm item={update} closeModal={closeModalUpdate} /> */}
          </div>
        </Modals>
      )}
    </div>
  );
}
