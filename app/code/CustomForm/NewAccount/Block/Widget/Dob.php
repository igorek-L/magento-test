<?php

namespace CustomForm\NewAccount\Block\Widget;

/**
 * Class Dob
 * @package CustomForm\NewAccount\Block\Widget
 */
class Dob extends \Magento\Customer\Block\Widget\Dob
{

    public function _construct()
    {
        parent::_construct();
        $this->setTemplate('CustomForm_NewAccount::widget/dob.phtml');
    }
    /**
     * @return string
     */
    public function getHtmlExtraParams()
    {
        $validators = [];
        // added validate-age
        $validators['validate-age'] = true;
        if ($this->isRequired()) {
            $validators['required'] = true;
        }
        $validators['validate-date'] = [
            'dateFormat' => $this->getDateFormat()
        ];
        $validators['validate-dob'] = true;

        return 'data-validate="' . $this->_escaper->escapeHtml(json_encode($validators)) . '"';
    }
}
