import React from 'react';
import styled from 'styled-components';
import { Task, TaskBody } from '../commonTypes';
import { colors } from '../colors';
import { formatDate } from '../formatDate';

interface AddSectionInterface {
    open: boolean;
    onComplete: (taskBody: TaskBody) => void;
    onClose: () => void;
}

export const AddSection: React.FC<AddSectionInterface> = ({
    open,
    onComplete,
    onClose,
}) => {
    const [taskName, setTaskName] = React.useState('');  
    const now = new Date();
    const initialDate = formatDate(now.toISOString());
    const [taskDeadline, setTaskDeadline] = React.useState(initialDate);

function addTask() {
    const taskBody: TaskBody = {
        name: taskName,
        deadline: new Date(taskDeadline).toISOString(),
        completed: false,
        };
        onComplete(taskBody);
        onClose();
        
    }
 
    
    return (
        <Container open={open}>
            <Content>
            <Header>
              Добавить новую задачу
              <CloseButton onClick={onClose}>⨯</CloseButton>

            </Header>
            <Label>Название задачи:</Label>
            <Field type='text' 
            value={taskName} 
            onChange={(event) => {
                const newValue = event.currentTarget.value;
                setTaskName(newValue);
            }}
            />
          
             <Label>Срок задачи:</Label>
             <Field
                type='datetime-local'
                step={1}
                value={taskDeadline}
                onChange={(event) => {
                    const newValue = event.currentTarget.value;
                    setTaskDeadline(newValue);
                }}  
                />
            <ButtonsSection>
              <ConfirmButton disabled={taskName === ''} onClick={addTask}>
                 Сохранить
            </ConfirmButton>
            </ButtonsSection>
           </Content>
        </Container>
    );
 };   

const Container = styled.div<{ open: boolean }>(({ open }) => ({
    height: open ? 224 : 0,
    overflow: 'hidden',
    backgroundColor: colors.section,
}));

const Content = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    padding: 16,
    });

const Header = styled.div({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    color: colors.lightText,
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '24px',
    marginBottom: 8,
    });

    const CloseButton = styled.div({
        display: 'block',
        height: 30,
        width: 30,
        borderRadius: 4,
        backgroundColor: colors.button.lightNeutral,
        
        color: colors.lightText,
        fontSize: '30px',
        lineHeight: '26px',
        textAlign: 'center',
        
        cursor: 'pointer',
        userSelect: 'none',
        
        '&:hover': {
        backgroundColor: colors.buttonHover.lightNeutral,
        },
        
        '&:active': {
        backgroundColor: colors.buttonActive.lightNeutral,
        },
    });
    
    const Label = styled.div({
        color: colors.lightText,
        fontSize: '14px',
        lineHeight: '18px',
        marginBottom: 4,
    });
        
    const Field = styled.input({
        height: 24,
        width: '100%',
        border: '1px solid lightgray',
        borderRadius: 4,
        backgroundColor: 'white',
        
        color: colors.text,
        fontSize: '16px',
        
        marginBottom: 8,
        });
        
    const ButtonsSection = styled.div({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
            
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
    });

    const ConfirmButton = styled.button({
        width: 130,
        height: 38,
        paddingTop: 4,
        paddingBottom: 4,
        marginLeft: 24,
        
        border: '1px solid lightgray',
        borderRadius: 4,
        backgroundColor: colors.button.positive,
        
        color: colors.lightText,
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '20px',
        
        cursor: 'pointer',
        userSelect: 'none',
        
        '&:hover': {
        backgroundColor: colors.buttonHover.positive,
        },
        
        '&:active': {
        backgroundColor: colors.buttonActive.positive,
        },
    });
        