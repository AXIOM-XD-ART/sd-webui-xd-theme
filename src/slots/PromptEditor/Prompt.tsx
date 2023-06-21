import { memo, useCallback, useState } from 'react';
import styled from 'styled-components';

import TagList, { PromptType, TagItem } from './TagList';
import { formatPrompt } from './utils';

/******************************************************
 *********************** Style *************************
 ******************************************************/

const View = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  cursor: pointer;

  position: relative;

  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: var(--input-padding);

  font-size: var(--input-text-size);
  font-weight: var(--input-text-weight);
  line-height: var(--line-sm);

  background: var(--button-secondary-background-fill);
  border: var(--button-border-width) solid var(--button-secondary-border-color);
  border-radius: var(--input-radius);
`;

/******************************************************
 ************************* Dom *************************
 ******************************************************/

interface PromptProps {
  type: PromptType;
}

const Prompt = memo<PromptProps>(({ type }) => {
  const [tags, setTags] = useState<TagItem[]>([]);

  const id =
    type === 'positive' ? "[id$='2img_prompt'] textarea" : "[id$='2img_neg_prompt'] textarea";

  const getValue = useCallback(() => {
    try {
      const textarea: HTMLTextAreaElement | any = get_uiCurrentTabContent().querySelector(id);
      if (textarea) setTags(formatPrompt(textarea.value));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const setValue = useCallback(() => {
    try {
      const textarea: HTMLTextAreaElement | any = get_uiCurrentTabContent().querySelector(id);
      if (textarea) textarea.value = tags.map((t) => t.text).join(', ');
      updateInput(textarea);
    } catch (error) {
      console.log(error);
    }
  }, [tags]);

  const setCurrentValue = useCallback((currentTags: TagItem[]) => {
    try {
      const textarea: HTMLTextAreaElement | any = get_uiCurrentTabContent().querySelector(id);
      if (textarea) textarea.value = currentTags.map((t) => t.text).join(', ');
      updateInput(textarea);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <View>
      <TagList setTags={setTags} setValue={setCurrentValue} tags={tags} type={type} />
      <ButtonGroup>
        <Button onClick={getValue} title="Load Prompt">
          🔄
        </Button>
        <Button onClick={setValue} title="Set Prompt">
          ➡️
        </Button>
      </ButtonGroup>
    </View>
  );
});

export default Prompt;
